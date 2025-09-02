export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-indigo-300 bg-indigo-50 dark:bg-gray-900 py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
        {/* Copyright */}
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {year} Mustaf — All rights reserved
        </p>

        {/* Social icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/mmmnr10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href="mailto:mustaf.h10@outlook.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
          >
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
