// components/Education.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const education = [
    {
      degree: "B.E. Computer Engineering",
      institution: "Zeal College of Engineering & Research, Narhe, Pune",
      period: "2023 - 2026",
      score: "Current SGPA: 8.9 / 10.0",
      icon: "fas fa-laptop-code",
      color: "#8B5CF6",
      achievements: ["Data Structures", "Algorithms", "Web Development", "Database Management"],
      rank: "Top 10%",
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Polytechnic, Ahmednagar",
      period: "2019 - 2022",
      score: "Aggregate: 84.80%",
      icon: "fas fa-microchip",
      color: "#3B82F6",
      achievements: ["Programming Fundamentals", "Networking", "Software Engineering"],
      rank: "Distinction",
    },
    {
      degree: "SSC (Grade 10)",
      institution: "Jeur(Ba), Ahmednagar",
      period: "2019",
      score: "Percentage: 86.40%",
      icon: "fas fa-school",
      color: "#10B981",
      achievements: ["Mathematics", "Science", "Computer Basics"],
      rank: "First Class",
    },
  ];

  const EducationCard = ({ edu, index }) => {
    const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 100, rotateX: -30 }}
        animate={cardInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
        whileHover={{ y: -15, transition: { duration: 0.2 } }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        className="relative perspective-1000 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, ${edu.color}, #8B5CF6, ${edu.color})`,
                padding: "2px",
                borderRadius: "1rem",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative p-6">
              {/* Animated icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={cardInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 mx-auto"
                style={{ background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}40)` }}
              >
                <motion.i
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`${edu.icon} text-3xl`}
                  style={{ color: edu.color }}
                />
              </motion.div>

              {/* Degree title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white"
              >
                {edu.degree}
              </motion.h3>

              {/* Institution */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2"
              >
                <i className="fas fa-university mr-1 text-purple-500"></i>
                {edu.institution}
              </motion.p>

              {/* Period badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={cardInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.4 }}
                className="flex justify-center mb-3"
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${edu.color}20`, color: edu.color }}
                >
                  <i className="fas fa-calendar-alt"></i>
                  {edu.period}
                </span>
              </motion.div>

              {/* Score with progress bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={cardInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                className="mb-3"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Academic Score</span>
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    className="text-lg font-bold"
                    style={{ color: edu.color }}
                  >
                    {edu.score.includes("SGPA") ? edu.score.split(":")[1] : edu.score.split(":")[1]}
                  </motion.span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={cardInView ? { width: edu.score.includes("8.9") ? "89%" : edu.score.includes("84.80") ? "85%" : "86%" } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${edu.color}, #8B5CF6)` }}
                  />
                </div>
              </motion.div>

              {/* Rank badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="flex justify-center"
              >
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs">
                  <i className="fas fa-trophy"></i>
                  {edu.rank}
                </span>
              </motion.div>

              {/* Hint for flipping */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute bottom-2 right-2 text-xs text-gray-400"
              >
                <i className="fas fa-hand-pointer"></i> Hover to flip
              </motion.div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br rounded-2xl p-6 shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: `linear-gradient(135deg, ${edu.color}, #8B5CF6)`,
            }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={cardInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-center mb-4"
                >
                  <i className={`${edu.icon} text-4xl text-white opacity-80`}></i>
                  <h3 className="text-white font-bold text-lg mt-2">Achievements</h3>
                </motion.div>

                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={cardInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 text-white text-sm"
                    >
                      <motion.i
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="fas fa-check-circle text-white text-xs"
                      />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="text-center text-white text-xs opacity-75 mt-4"
              >
                <i className="fas fa-graduation-cap"></i> {edu.period}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"
        />
      </div>

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
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 backdrop-blur-sm">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                🎓 Academic Journey
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient"
          >
            Academic Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Consistent academic performance with strong technical foundation and practical skills
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} index={idx} />
          ))}
        </div>

        {/* Decorative timeline connector */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-16"
        >
          <div className="flex justify-center items-center gap-2">
            {education.map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                whileHover={{ scale: 2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 px-8 py-4 rounded-full backdrop-blur-sm"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-chart-line text-green-500"></i>
              <span className="font-semibold">Consistent Performer</span>
            </motion.div>
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-trophy text-yellow-500"></i>
              <span className="font-semibold">Top 10% Achiever</span>
            </motion.div>
            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-medal text-blue-500"></i>
              <span className="font-semibold">Distinction Holder</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}