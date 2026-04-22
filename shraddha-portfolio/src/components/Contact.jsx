// components/Contact.js
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const contactInfo = [
  { icon: "fas fa-map-marker-alt", label: "Location", value: "Narhe, Pune - 411041", color: "#8B5CF6" },
  { icon: "fas fa-phone-alt", label: "Phone", value: "+91-9021222913", color: "#3B82F6" },
  { icon: "fas fa-envelope", label: "Email", value: "shraddhasadavarte24@gmail.com", color: "#EC4899" },
  { icon: "fab fa-linkedin", label: "LinkedIn", value: "shraddha-sadavarte", color: "#0077B5", link: "https://linkedin.com/in/shraddha-sadavarte-4a239926b/" },
  { icon: "fab fa-github", label: "GitHub", value: "shraddha-sadavarte", color: "#181717", link: "https://github.com/shraddha-sadavarte" },
];

const ContactCard = ({ info, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border border-gray-100 dark:border-gray-700"
    >
      <a href={info.link || `mailto:${info.value}`} className="block" target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center mx-auto mb-4"
          style={{ background: `linear-gradient(135deg, ${info.color}20, ${info.color}40)` }}
        >
          <i className={`${info.icon} text-2xl`} style={{ color: info.color }}></i>
        </motion.div>
        <h3 className="font-semibold text-center mb-1 text-gray-800 dark:text-white">{info.label}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center break-all">{info.value}</p>
      </a>
    </motion.div>
  );
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      window.location.href = `mailto:shraddhasadavarte24@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-purple-50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"
        />
      </div>

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
                📬 Get In Touch
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and tech discussions. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <ContactCard key={idx} info={info} index={idx} />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="flex justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <i className="fas fa-clock"></i> Response within 24hrs
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <i className="fas fa-globe"></i> Available worldwide
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="I'd love to discuss..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane mr-2"></i> Send Message</>
                  )}
                </motion.button>
              </form>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}