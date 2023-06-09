import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

function GeneratePattern() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div>
      <div className="pointer-events-none">
        {/* bottom gradient */}
        <div className="z-20 text-left absolute gradient overflow-hidden bg-blue-500/0 -top-[42%] right-0 hidden lg:block translate-x-[97%] text-[216px] font-syncopateB leading-[87.5%]">
          <div className="element h-[1500px] opacity-0 bg-red-500/0 text-left">
            <div className="font-syncopateB text-transparent text-stroke ">
              GGGGGGGGGGGGGGGGGG
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              NNNNNNNNNNNNNNNNN
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              RRRRRRRRRRRRRRRRRRRRRR
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              AAAAAAAAAAAAAAAAA
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              TTTTTTTTTTTTTTTTTTTTTTTT
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke ">
              GGGGGGGGGGGGGGGGG
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              NNNNNNNNNNNNNNNNNNN
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              RRRRRRRRRRRRRRRRRRRR
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              AAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              TTTTTTTTTTTTTTTTTTTTTTTTT
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
          </div>
        </div>
        <motion.div className="z-10 text-right absolute overflow-hidden bg-blue-500/0 -top-[42%] right-0 hidden lg:block translate-x-[97%] text-[216px] font-syncopateB leading-[87.5%]">
          <motion.div
            initial={{ y: 750 }}
            animate={{ y: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className={
              isLoading
                ? "h-[1500px] bg-red-500/0 text-left"
                : "element h-[1500px] bg-red-500/0 text-left"
            }
          >
            <div className="font-syncopateB text-transparent text-stroke">
              GGGGGGGGGGGGGGGGGG
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              NNNNNNNNNNNNNNNNN
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              RRRRRRRRRRRRRRRRRRRRRR
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              AAAAAAAAAAAAAAAAA
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              TTTTTTTTTTTTTTTTTTTTTTTT
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke ">
              GGGGGGGGGGGGGGGGG
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              NNNNNNNNNNNNNNNNNNN
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEE
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              RRRRRRRRRRRRRRRRRRRR
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              AAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              TTTTTTTTTTTTTTTTTTTTTTTTT
            </div>
            <div className="font-syncopateB text-transparent text-stroke">
              EEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default GeneratePattern;
