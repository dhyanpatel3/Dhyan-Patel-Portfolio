import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(onComplete, 800);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-zinc-50"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="relative overflow-hidden px-8 py-2">
        <motion.h1
          className="text-[15vw] leading-none font-bold font-mono tracking-tighter"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {count}
        </motion.h1>
        <div className="absolute top-0 right-0 text-sm font-mono opacity-50">
          LOADING
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-xs font-mono opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
      >
        DHYAN PATEL
        <br />
        PORTFOLIO 2025
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-xs font-mono opacity-50 text-right"
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
