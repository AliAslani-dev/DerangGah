"use client";
import { motion } from "framer-motion";
import { FaBook, FaQuoteRight, FaLightbulb } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 text-blue-900 overflow-hidden">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-blue-200 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaBook />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 text-6xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <FaQuoteRight />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 text-blue-200 text-5xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <FaLightbulb />
      </motion.div>

      {/* Main Content */}
      <motion.h1
        className="text-5xl md:text-6xl  mb-6 text-center"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        درنگ گاه
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-10 text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        درنگ گاه جایی است برای کشف بهترین قطعات کوتاه و نقل قول‌های کتاب‌ها. 
        اینجا می‌توانید از خرد و دانش نویسندگان الهام بگیرید و لحظاتی از درنگ و تفکر برای خود بسازید.
      </motion.p>
      <motion.button
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        شروع کنید
      </motion.button>
    </section>
  );
}
