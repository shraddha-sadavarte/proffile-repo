export default function Button({ children, onClick, variant = "primary" }) {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}