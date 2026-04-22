// components/About.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                📖 About Me
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I am a passionate <span className="text-purple-600 dark:text-purple-400 font-semibold">Full Stack Developer</span> with a strong focus on building 
              scalable, user-friendly applications. Currently interning at Litecode Software Pvt. Ltd., 
              I specialize in the MERN stack and Spring Boot, delivering production-ready solutions 
              with secure authentication and role-based access control.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              With a consistent academic record (SGPA: 8.9) and hands-on project experience, 
              I thrive on solving complex problems and creating innovative solutions. I'm always 
              eager to learn new technologies and contribute to impactful projects.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              {["React.js", "Node.js", "Spring Boot", "MongoDB", "Tailwind CSS"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}