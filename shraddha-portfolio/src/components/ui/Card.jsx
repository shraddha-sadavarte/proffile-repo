export default function Card({ children, title, desc }) {
  if (title && desc) {
    return (
      <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover-lift">
        <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
      </div>
    );
  }
  return (
    <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover-lift">
      {children}
    </div>
  );
}