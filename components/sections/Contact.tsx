import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Check, Copy } from "lucide-react";

interface ContactProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const Contact: React.FC<ContactProps> = ({
  containerVariants,
  itemVariants,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dp28dhyan@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      className="mb-10 scroll-mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="rounded-2xl bg-zinc-900 dark:bg-zinc-800 border border-transparent dark:border-zinc-700 text-white p-6 sm:p-12 text-center relative overflow-hidden shadow-xl"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-[0.05] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            Ready to build something together?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:dp28dhyan@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-200 text-zinc-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Send size={18} />
              Say Hello
            </motion.a>

            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 dark:bg-zinc-700 text-white rounded-full font-medium border border-zinc-700 dark:border-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all"
            >
              {isCopied ? <Check size={18} /> : <Copy size={18} />}
              {isCopied ? "Copied!" : "Copy Email"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
