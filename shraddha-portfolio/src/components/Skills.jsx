/* eslint-disable react-hooks/purity */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "fas fa-laptop-code",
    color: "#61DAFB",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React.js", icon: "fab fa-react", color: "#61DAFB", level: 90 },
      { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#06B6D4", level: 85 },
      { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E", level: 88 },
      { name: "HTML5", icon: "fab fa-html5", color: "#E34F26", level: 92 },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6", level: 90 },
      { name: "Redux", icon: "fab fa-react", color: "#764ABC", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    icon: "fas fa-server",
    color: "#8B5CF6",
    description: "Creating robust and scalable server-side applications",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933", level: 85 },
      { name: "Express.js", icon: "fas fa-code", color: "#000000", level: 88 },
      { name: "Spring Boot", icon: "fas fa-leaf", color: "#6DB33F", level: 82 },
      { name: "REST APIs", icon: "fas fa-network-wired", color: "#10B981", level: 90 },
      { name: "JWT Auth", icon: "fas fa-key", color: "#F59E0B", level: 85 },
    ],
  },
  {
    category: "Programming Languages",
    icon: "fas fa-code",
    color: "#F59E0B",
    description: "Proficient in multiple programming paradigms",
    skills: [
      { name: "Java", icon: "fab fa-java", color: "#007396", level: 88 },
      { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E", level: 90 },
      { name: "Python", icon: "fab fa-python", color: "#3776AB", level: 85 },
      { name: "SQL", icon: "fas fa-database", color: "#4479A1", level: 87 },
      { name: "TypeScript", icon: "fab fa-js", color: "#3178C6", level: 75 },
    ],
  },
  {
    category: "Databases",
    icon: "fas fa-database",
    color: "#10B981",
    description: "Efficient data storage and retrieval solutions",
    skills: [
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47A248", level: 88 },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1", level: 85 },
      { name: "PostgreSQL", icon: "fas fa-database", color: "#336791", level: 75 },
      { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28", level: 80 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "fas fa-tools",
    color: "#EF4444",
    description: "Streamlining development and deployment workflows",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032", level: 90 },
      { name: "GitHub", icon: "fab fa-github", color: "#781879", level: 92 },
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED", level: 70 },
      { name: "Postman", icon: "fas fa-envelope", color: "#FF6C37", level: 88 },
      { name: "VS Code", icon: "fas fa-code", color: "#007ACC", level: 95 },
      { name: "Vercel", icon: "fas fa-cloud", color: "#967348", level: 85 },
    ],
  },
  {
    category: "Core Concepts",
    icon: "fas fa-brain",
    color: "#EC4899",
    description: "Fundamental software engineering principles",
    skills: [
      { name: "MVC Pattern", icon: "fas fa-layer-group", color: "#8B5CF6", level: 88 },
      { name: "RBAC", icon: "fas fa-users", color: "#EC4899", level: 85 },
      { name: "Agile/Scrum", icon: "fas fa-people-arrows", color: "#10B981", level: 90 },
      { name: "System Design", icon: "fas fa-cubes", color: "#F59E0B", level: 80 },
      { name: "OOP", icon: "fas fa-shapes", color: "#EF4444", level: 92 },
    ],
  },
];

// Animated Skill Icon Component
const AnimatedSkillIcon = ({ skill, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.03, type: "spring", stiffness: 200 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 shadow-md hover:shadow-xl transition-all cursor-pointer"
        whileHover={{ scale: 1.05 }}
        style={{
          border: `1px solid ${skill.color}20`,
        }}
      >
        {/* Animated Icon */}
        <motion.div
          className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-2"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
          }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.i
            className={`${skill.icon} text-2xl`}
            style={{ color: skill.color }}
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: index * 0.1,
              delay: index * 0.1,
            }}
          />
          
          {/* Pulsing background on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ background: skill.color }}
            />
          )}
        </motion.div>

        {/* Skill Name */}
        <motion.span
          className="text-xs font-semibold text-center mt-1 text-gray-700 dark:text-gray-300"
          style={{ color: skill.color }}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
        >
          {skill.name}
        </motion.span>

        {/* Skill Level Bar */}
        <div className="w-full mt-2">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: index * 0.05 }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)` }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Category Card Component
const CategoryCard = ({ category, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative"
    >
      <motion.div
        className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
        style={{
          border: `1px solid ${category.color}20`,
        }}
      >
        {/* Gradient Header */}
        <motion.div
          className="relative p-6 pb-4"
          style={{
            background: `linear-gradient(135deg, ${category.color}10, ${category.color}05)`,
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                }}
              >
                <i className={`${category.icon} text-3xl`} style={{ color: category.color }} />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: category.color }}>
                  {category.category}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {category.description}
                </p>
              </div>
            </div>
            
            {/* Skill Count Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="px-2 py-1 rounded-lg text-xs font-bold"
              style={{ background: `${category.color}20`, color: category.color }}
            >
              {category.skills.length} skills
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.skills.slice(0, isExpanded ? category.skills.length : 6).map((skill, idx) => (
              <AnimatedSkillIcon key={skill.name} skill={skill} index={idx} inView={inView} />
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {category.skills.length > 6 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mt-4 py-2 text-xs font-semibold rounded-lg transition-all"
              style={{
                background: `${category.color}10`,
                color: category.color,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isExpanded ? (
                <>
                  <i className="fas fa-chevron-up mr-1"></i> Show Less
                </>
              ) : (
                <>
                  <i className="fas fa-chevron-down mr-1"></i> Show All ({category.skills.length} skills)
                </>
              )}
            </motion.button>
          )}
        </div>

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(135deg, ${category.color}, #8B5CF6, ${category.color})`,
            padding: "2px",
            borderRadius: "1rem",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Floating Particles Background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `radial-gradient(circle, ${["#8B5CF6", "#3B82F6", "#EC4899", "#F59E0B"][i % 4]}, transparent)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [null, -50, 50, -50],
            x: [null, 30, -30, 30],
            opacity: [null, 0.5, 0.1, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Stats Counter Component
const StatCounter = ({ value, label, icon, color, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="text-center"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center mx-auto mb-2"
        style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}
      >
        <i className={`${icon} text-xl`} style={{ color }} />
      </div>
      <div className="text-2xl font-bold" style={{ color }}>
        {count}+
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <FloatingParticles />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 backdrop-blur-sm">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                ⚡ Technical Expertise
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Technical Arsenal
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging modern technologies to build scalable, high-performance applications
          </p>
        </motion.div>

        {/* Stats Section - Fixed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <CategoryCard key={category.category} category={category} index={idx} />
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 px-8 py-4 rounded-full backdrop-blur-sm"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="font-semibold cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-trophy text-yellow-500"></i> SGPA: 8.9 / 10.0
            </motion.span>
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="font-semibold cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-graduation-cap text-green-500"></i> 84.80% - Diploma
            </motion.span>
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="font-semibold cursor-pointer flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-chart-line text-blue-500"></i> 86.40% - SSC
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Skill Level Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500"
        >
          <i className="fas fa-chart-simple mr-1"></i> Skill levels based on project experience and proficiency
        </motion.div>
      </div>
    </section>
  );
}