import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(onComplete, 200);
      },
    });

    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, onComplete, rounded]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-zinc-50"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.9, ease: [0.83, 0, 0.17, 1] },
      }}
    >
      <div className="relative overflow-hidden px-4 py-2 md:px-8">
        <motion.h1
          ref={ref}
          className="text-[25vw] md:text-[15vw] leading-none font-bold font-mono tracking-tighter tabular-nums"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          0
        </motion.h1>
        <div className="absolute top-0 right-0 text-sm font-mono opacity-50">
          LOADING
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] md:text-xs font-mono opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
      >
        DHYAN PATEL
        <br />
        PORTFOLIO 2025
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[10px] md:text-xs font-mono opacity-50 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
      >
        INITIALIZING SYSTEM...
        <br />
        READY
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
