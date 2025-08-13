import "./globals.css";
import {Poppins, Bebas_Neue, Roboto} from "next/font/google";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const bebasFont = Bebas_Neue({
  variable: "--bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniel portfolio",
  description:
    "I am a web developer based in Stockholm, passionate about bringing ideas to life, with an eye for details",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${poppinsFont.variable} ${bebasFont.variable} ${robotoFont.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
