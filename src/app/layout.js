import "./globals.css";
import { Inter, Outfit } from "next/font/google";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mustaf | Portfolio - Web & Mobile Developer",
  description:
    "Explore the professional portfolio of Mustaf, a frontend developer specializing in building modern web and mobile applications with React, Next.js, and Tailwind CSS.",
  keywords: ["Web Developer", "Frontend Developer", "Next.js", "React", "Mobile Development", "Stockholm"],
  authors: [{ name: "Mustaf" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`
          ${interFont.variable}
          ${outfitFont.variable}
          antialiased
          font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}

