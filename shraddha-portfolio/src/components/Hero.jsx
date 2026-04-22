// components/Hero.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Hero() {
  const roles = ["Full Stack Developer", "MERN Stack Expert", "Software Engineer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              👋 Available for Opportunities
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Shraddha Sadavarte
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl mb-4 h-12">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-purple-600 dark:text-purple-400 font-semibold"
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Results-driven Software Developer with hands-on experience in full-stack web development using MERN stack & Spring Boot.
            Architecting production-ready applications with JWT authentication, RBAC, and RESTful APIs.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work <i className="fas fa-arrow-right ml-2"></i>
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-12"
          >
            {[
              { icon: "fab fa-linkedin", link: "https://linkedin.com/in/shraddha-sadavarte-4a239926b/", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { icon: "fab fa-github", link: "https://github.com/shraddha-sadavarte", color: "hover:text-gray-900 dark:hover:text-white" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-all cursor-pointer`}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-4 text-sm flex-wrap"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm cursor-pointer shadow-md text-gray-700 dark:text-gray-300"
            >
              📍 Pune, India
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm cursor-pointer shadow-md text-gray-700 dark:text-gray-300"
            >
              📞 +91-9021222913
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}