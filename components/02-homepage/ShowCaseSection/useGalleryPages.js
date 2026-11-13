import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useGalleryPages({ data, endpoint, search = "", setPosts }) {
  const { ref, inView } = useInView();
  const source = search.trim();
  const [progress, setProgress] = useState(null);
  const current = progress?.data === data && progress?.source === source ? progress : null;
  const initial = source ? null : data;
  const nextPage = current?.nextPage ?? (initial ? 2 : 1);
  const hasMore = current?.hasMore ?? (!initial || initial.documents.length < initial.total);
  const error = current?.error ?? false;
  const [requested, setRequested] = useState(null);
  const pendingSearch = Boolean(source && !current);

  useEffect(() => {
    setPosts(source ? [] : data?.documents ?? []);
  }, [data, source, setPosts]);

  useEffect(() => {
    if (hasMore && !error && (inView || pendingSearch || nextPage === 1)) {
      setRequested({ data, source, page: nextPage });
    }
  }, [data, error, hasMore, inView, nextPage, pendingSearch, source]);

  useEffect(() => {
    if (!requested || requested.data !== data || requested.source !== source) return;
    const { page } = requested;

    const controller = new AbortController();
    const load = async () => {
      try {
        const params = new URLSearchParams({ page: String(page) });
        if (source) params.set("search", source);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ORIGIN}${endpoint}?${params}`,
          { signal: controller.signal },
        );
        const result = await response.json();
        if (!response.ok || !result.success || !Array.isArray(result.data?.documents)) {
          throw new Error("Unable to load images.");
        }
        if (controller.signal.aborted) return;
        const { documents, total } = result.data;
        setPosts((previous) => {
          const ids = new Set(previous.map((post) => post.$id ?? post.photo));
          return [...previous, ...documents.filter((post) => !ids.has(post.$id ?? post.photo) && !previous.some((item) => item.photo === post.photo))];
        });
        setProgress({
          data, source, nextPage: page + 1,
          hasMore: documents.length > 0 && page * 8 < total,
          error: false,
        });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error(error);
        setProgress({ data, source, nextPage: page, hasMore: true, error: true });
      }
    };

    const timer = setTimeout(load, source && page === 1 ? 400 : 0);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [data, endpoint, requested, setPosts, source]);

  function retryLoading() {
    setRequested({ data, source, page: nextPage });
  }

  return { ref, hasMore, error, retryLoading };
}
