// components/Projects.js
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Task Management System",
    tech: "MERN Stack",
    icon: "fas fa-tasks",
    gradient: "from-purple-500 to-pink-500",
    color: "#8B5CF6",
    features: [
      "JWT Authentication & bcrypt hashing",
      "CRUD operations with Express.js",
      "Task categorization (Complete/Incomplete/Favourites)",
      "Responsive React.js UI",
      "Cloud deployment ready"
    ],
    highlights: [
      { label: "API Endpoints", value: "5+" },
      { label: "Components", value: "10+" },
      { label: "Status", value: "Completed" }
    ],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=300&fit=crop",
    githubLink: "https://github.com/shraddhasadavarte/task-management-system",
    date: "2025",
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    title: "Project Management System",
    tech: "MERN + RBAC",
    icon: "fas fa-diagram-project",
    gradient: "from-blue-500 to-cyan-500",
    color: "#3B82F6",
    features: [
      "Dual-portal architecture (Admin/Employee)",
      "Role-Based Access Control (RBAC)",
      "Real-time progress tracking with charts",
      "Milestone monitoring dashboard",
      "Modular RESTful API design"
    ],
    highlights: [
      { label: "User Roles", value: "2" },
      { label: "Modules", value: "3+" },
      { label: "Status", value: "Completed" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    githubLink: "https://github.com/shraddhasadavarte/project-management-system",
    date: "2025",
    category: "Enterprise",
    status: "Completed"
  },
  {
    id: 3,
    title: "AeroSpace ERP System",
    tech: "Spring Boot + React",
    icon: "fas fa-rocket",
    gradient: "from-green-500 to-emerald-500",
    color: "#10B981",
    features: [
      "Enterprise-grade architecture for aerospace industry",
      "Secure API endpoints with JWT validation",
      "Inventory tracking for aircraft components",
      "Compliance management with regulatory standards",
      "Real-time supply chain monitoring",
      "Maintenance scheduling system"
    ],
    highlights: [
      { label: "Microservices", value: "10+" },
      { label: "Database Tables", value: "20+" },
      { label: "Status", value: "In Progress" }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    githubLink: "https://github.com/shraddhasadavarte/aerospace-erp-system",
    date: "2026",
    category: "Enterprise",
    status: "Ongoing"
  },
  {
    id: 4,
    title: "FinTech Dashboard",
    tech: "MERN + D3.js",
    icon: "fas fa-chart-line",
    gradient: "from-orange-500 to-red-500",
    color: "#F59E0B",
    features: [
      "Real-time financial data visualization with D3.js",
      "Transaction tracking & analytics dashboard",
      "Portfolio management with performance metrics",
      "Interactive charts and trend analysis",
      "User authentication with role-based access",
      "Export reports in PDF/Excel formats"
    ],
    highlights: [
      { label: "Transactions", value: "10K+" },
      { label: "Chart Types", value: "4" },
      { label: "Status", value: "Completed" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    githubLink: "https://github.com/shraddhasadavarte/fintech-dashboard",
    date: "2025",
    category: "Full Stack",
    status: "Completed"
  }
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
          >
            <i className="fas fa-times"></i>
          </button>
          {project.status === "Ongoing" && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold animate-pulse">
              <i className="fas fa-spinner fa-spin mr-1"></i> Ongoing
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className={`${project.icon} text-3xl`} style={{ color: project.color }}></i>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white mb-4`}>
            {project.tech}
          </span>
          
          <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">Key Features:</h3>
          <ul className="space-y-2 mb-6">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">Project Highlights:</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold" style={{ color: project.color }}>{highlight.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{highlight.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              <i className="fab fa-github mr-2"></i> View on GitHub
            </a>
            <button
              onClick={() => alert("Project is in GitHub repository. Check the link for source code!")}
              className="flex-1 text-center px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              <i className="fas fa-info-circle mr-2"></i> More Info
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Grid View Card
const GridCard = ({ project, index, onViewDetails }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer group"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              onClick={() => onViewDetails(project)}
              className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold text-sm hover:bg-purple-600 hover:text-white transition-all"
            >
              Quick View <i className="fas fa-eye ml-2"></i>
            </motion.button>
          </motion.div>
          {project.status === "Ongoing" && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-yellow-500 text-white rounded-full text-xs font-semibold animate-pulse">
              <i className="fas fa-spinner fa-spin mr-1"></i> Ongoing
            </div>
          )}
        </div>
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
            <span className={`px-2 py-1 rounded-md text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
              {project.tech}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {project.features[0]} • {project.features[1]}
          </p>
          <div className="flex gap-2">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <div key={i} className="flex-1 text-center text-xs">
                <div className="font-bold" style={{ color: project.color }}>{highlight.value}</div>
                <div className="text-gray-500 dark:text-gray-400">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// List View Card
const ListCard = ({ project, index, onViewDetails }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <button
              onClick={() => onViewDetails(project)}
              className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold text-sm"
            >
              View Details
            </button>
          </motion.div>
          {project.status === "Ongoing" && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-yellow-500 text-white rounded-full text-xs font-semibold animate-pulse">
              <i className="fas fa-spinner fa-spin mr-1"></i> Ongoing
            </div>
          )}
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <i className={`${project.icon} text-xl`} style={{ color: project.color }}></i>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
              </div>
              <span className={`inline-block px-2 py-1 rounded-md text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                {project.tech}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2">
            {project.features.slice(0, 3).join(" • ")}
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="text-lg font-bold" style={{ color: project.color }}>{highlight.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{highlight.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 text-sm"
            >
              <i className="fab fa-github mr-1"></i> GitHub Repository
            </a>
            <button
              onClick={() => onViewDetails(project)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
            >
              <i className="fas fa-info-circle mr-1"></i> Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Carousel View Card
const CarouselCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
            {project.tech}
          </span>
        </div>
        {project.status === "Ongoing" && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold animate-pulse">
            <i className="fas fa-spinner fa-spin mr-1"></i> Ongoing
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="text-center flex-1">
              <div className="text-xl font-bold" style={{ color: project.color }}>{highlight.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{highlight.label}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onViewDetails(project)}
          className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          View on GitHub <i className="fab fa-github ml-2"></i>
        </button>
      </div>
    </motion.div>
  );
};

// View Toggle Buttons
const ViewToggle = ({ view, setView }) => {
  const views = [
    { id: "grid", icon: "fas fa-th", label: "Grid View" },
    { id: "list", icon: "fas fa-list", label: "List View" },
    { id: "carousel", icon: "fas fa-images", label: "Carousel View" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center gap-3 mb-12"
    >
      {views.map((v) => (
        <motion.button
          key={v.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setView(v.id)}
          className={`px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
            view === v.id
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <i className={v.icon}></i>
          <span className="hidden sm:inline">{v.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

// Filter Buttons
const FilterButtons = ({ filter, setFilter, categories }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex justify-center gap-3 mb-8 flex-wrap"
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter(cat)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            filter === cat
              ? "bg-purple-600 text-white shadow-md"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </motion.div>
  );
};

// Carousel Component
const Carousel = ({ projects, onViewDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <CarouselCard
            key={currentIndex}
            project={projects[currentIndex]}
            onViewDetails={onViewDetails}
          />
        </AnimatePresence>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition z-10"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition z-10"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "w-6 bg-purple-600" : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = filter === "All" ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 dark:from-purple-900/10 dark:via-transparent dark:to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 backdrop-blur-sm">
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                🚀 Featured Work
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-ready applications demonstrating full-stack expertise and innovative solutions
          </p>
        </motion.div>

        <ViewToggle view={view} setView={setView} />
        <FilterButtons filter={filter} setFilter={setFilter} categories={categories} />

        <AnimatePresence mode="wait">
          {view === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, idx) => (
                <GridCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </motion.div>
          )}

          {view === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {filteredProjects.map((project, idx) => (
                <ListCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </motion.div>
          )}

          {view === "carousel" && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <Carousel projects={filteredProjects} onViewDetails={setSelectedProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Showing {filteredProjects.length} of {projectsData.length} projects
        </motion.div>

        {/* GitHub Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-4 text-xs text-gray-400 dark:text-gray-500"
        >
          <i className="fab fa-github mr-1"></i> All projects available on GitHub. Click "View on GitHub" to explore the source code.
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}