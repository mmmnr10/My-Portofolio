export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-white dark:bg-[#1a1a1a] py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">

        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {year} Mustaf — All rights reserved
        </p>

        <div className="flex gap-4 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/mmmnr10" target="_blank">GitHub</a>
          <a href="mailto:mustaf.h10@outlook.com">Email</a>
        </div>

      </div>
    </footer>
  );
}
