// components/Footer.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="text-gray-600 dark:text-gray-400"
          whileHover={{ scale: 1.02 }}
        >
          © 2026 Shraddha Sadavarte. Crafted with <span className="text-red-500">💜</span> using React & Tailwind
        </motion.p>
        <motion.p 
          className="text-sm mt-2 text-gray-500 dark:text-gray-500"
          whileHover={{ scale: 1.02 }}
        >
          Software Developer | Full Stack Engineer | MERN Stack
        </motion.p>
        
        {/* Social links in footer */}
        <motion.div 
          className="flex justify-center gap-6 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://linkedin.com/in/shraddha-sadavarte-4a239926b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a 
            href="https://github.com/shraddha-sadavarte" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <a 
            href="mailto:shraddhasadavarte24@gmail.com" 
            className="text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}