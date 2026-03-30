import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t border-black/5 dark:border-white/5 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            © {year} Mustaf <span className="text-indigo-500">A.</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium font-outfit">
            Frontend Utvecklare • Stockholm
          </p>
        </div>

        <div className="flex gap-6">
          <FooterLink href="https://github.com/mmmnr10" icon={<FiGithub />} />
          <FooterLink href="#" icon={<FiLinkedin />} />
          <FooterLink href="mailto:mustaf.h10@outlook.com" icon={<FiMail />} />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}

