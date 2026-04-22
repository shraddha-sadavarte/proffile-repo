// components/Experience.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Litecode Software Pvt. Ltd.",
    period: "Jan 2026 – Present",
    location: "Pune, India",
    icon: "fas fa-laptop-code",
    color: "#8B5CF6",
    achievements: [
      "Contributing to full-stack web features using MERN stack in professional product environment",
      "Building, testing, and shipping RESTful APIs integrated with React.js frontend components",
      "Participating in code reviews, sprint planning, daily stand-ups (Agile workflows)",
      "Debugging and resolving issues across the stack, improving performance & UX by 30%"
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"]
  },
  {
    role: "Frontend Developer Intern",
    company: "CodSoft",
    period: "Mar 2024",
    location: "Remote",
    icon: "fas fa-code",
    color: "#3B82F6",
    achievements: [
      "Collaborated on real-world frontend projects using HTML, CSS, JavaScript, and React.js",
      "Enhanced UI responsiveness and cross-browser compatibility for client-facing apps",
      "Received mentorship in production code quality, component reusability, responsive design"
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
        />
      )}

      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ml-12 border border-gray-100 dark:border-gray-700"
      >
        {/* Icon circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
          className="absolute -left-12 top-6 w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
          }}
        >
          <i className={`${exp.icon} text-white text-lg`}></i>
        </motion.div>

        {/* Content */}
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-2xl font-bold"
              style={{ color: exp.color }}
            >
              {exp.role}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              {exp.company}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1"
            >
              <i className="fas fa-calendar-alt"></i> {exp.period}
              <span className="mx-1">•</span>
              <i className="fas fa-map-marker-alt"></i> {exp.location}
            </motion.p>
          </div>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-2 mb-4"
        >
          {exp.achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex gap-2 text-gray-600 dark:text-gray-300"
            >
              <motion.i
                whileHover={{ scale: 1.2, rotate: 90 }}
                className="fas fa-check-circle text-purple-500 mt-1 text-xs"
              ></motion.i>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {exp.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium cursor-pointer text-gray-700 dark:text-gray-300"
              style={{ color: exp.color }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-purple-50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 backdrop-blur-sm">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                💼 Professional Journey
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry experience & collaborative development in Agile environments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}