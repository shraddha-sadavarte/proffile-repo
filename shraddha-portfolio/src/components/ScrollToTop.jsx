// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg z-40 hover:bg-purple-700 transition-all"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </>
  );
}