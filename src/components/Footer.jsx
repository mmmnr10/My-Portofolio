export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t skills-border card-bg py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4">
        {/* Copy */}
        <small className="text-sm secondary-color">
          © {year} | Crafted with ❤️ by Mustaf
        </small>

        {/* Social icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/mmmnr10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href="mailto:mustaf.h10@outlook.com"
            className="hover:text-white transition-colors"
          >
            <i className="fas fa-envelope text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
