// components/Certifications.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    name: "Python Programming",
    issuer: "Zeal College of Engineering & Research",
    year: "2025",
    icon: "fab fa-python",
    color: "#3776AB",
    skills: ["Data Structures", "OOP", "File Handling", "Modules"]
  },
  {
    name: "Core Java",
    issuer: "Zeal College of Engineering & Research",
    year: "2025",
    icon: "fab fa-java",
    color: "#007396",
    skills: ["OOP Concepts", "Collections", "Multithreading", "Exception Handling"]
  },
  {
    name: "SQL & Database Fundamentals",
    issuer: "Zeal College of Engineering & Research",
    year: "2025",
    icon: "fas fa-database",
    color: "#4479A1",
    skills: ["Complex Queries", "Joins", "Normalization", "Indexing"]
  }
];

const competencies = [
  { name: "Problem Solving", icon: "fas fa-puzzle-piece", color: "#8B5CF6" },
  { name: "System Design Thinking", icon: "fas fa-brain", color: "#EC4899" },
  { name: "Cross-functional Collaboration", icon: "fas fa-users", color: "#10B981" },
  { name: "Project Coordination", icon: "fas fa-chart-line", color: "#F59E0B" },
  { name: "Logical Reasoning", icon: "fas fa-microchip", color: "#EF4444" },
  { name: "Agile Mindset", icon: "fas fa-people-arrows", color: "#3B82F6" },
  { name: "Leadership", icon: "fas fa-crown", color: "#8B5CF6" },
  { name: "Time Management", icon: "fas fa-clock", color: "#10B981" },
];

const CertificationCard = ({ cert, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateY: 90 }}
      animate={inView ? { opacity: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 mx-auto"
        style={{ background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}40)` }}
      >
        <i className={`${cert.icon} text-3xl`} style={{ color: cert.color }}></i>
      </motion.div>
      
      <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">{cert.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">{cert.issuer}</p>
      <p className="text-xs text-purple-600 dark:text-purple-400 text-center mb-3">{cert.year}</p>
      
      <div className="flex flex-wrap gap-1 justify-center mb-3">
        {cert.skills.map((skill, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 rounded-full"
      />
    </motion.div>
  );
};

const CompetencyBadge = ({ comp, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="group relative"
    >
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700">
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center mb-2"
          style={{ background: `linear-gradient(135deg, ${comp.color}20, ${comp.color}40)` }}
        >
          <i className={`${comp.icon} text-xl`} style={{ color: comp.color }}></i>
        </motion.div>
        <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{comp.name}</span>
      </div>
    </motion.div>
  );
};

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-pink-50 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      
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
                🎓 Certifications & Skills
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Certifications & Core Competencies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and key competencies that drive excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white"
            >
              <i className="fas fa-certificate text-purple-600 dark:text-purple-400 mr-2"></i>
              Professional Certifications
            </motion.h3>
            <div className="grid sm:grid-cols-1 gap-4">
              {certifications.map((cert, idx) => (
                <CertificationCard key={idx} cert={cert} index={idx} />
              ))}
            </div>
          </div>

          {/* Competencies Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white"
            >
              <i className="fas fa-star text-purple-600 dark:text-purple-400 mr-2"></i>
              Core Competencies
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {competencies.map((comp, idx) => (
                <CompetencyBadge key={idx} comp={comp} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}