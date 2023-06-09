import "@/styles/globals.css";
import Head from "next/head";
import NextProgress from "next-progress";
import { AnimatePresence, motion } from "framer-motion";

import SmoothScroll from "@/components/00-smoothscroll/SmoothScroll";
import LoadingScreen from "@/components/04-loadingscreen/LoadingScreen";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      {/* progress bar  */}
      <NextProgress
        height="2px"
        color="#8832D4"
        delay={1}
        options={{ showSpinner: false }}
      />
      <Head>
        <link rel="shortcut icon" href="#" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#211F24" />
        <meta
          name="msapplication-TileImage"
          content="favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#211F24"></meta>
      </Head>
      <div>
        {/* loading screen */}
        <LoadingScreen />
        <SmoothScroll>
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="hidden"
              animate="enter"
              variants={{
                hidden: { opacity: 0 },
                enter: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }}
            >
              <div>
                <Component {...pageProps} />
              </div>
            </motion.div>
          </AnimatePresence>
        </SmoothScroll>
      </div>
    </>
  );
}
