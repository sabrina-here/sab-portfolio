import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabrina Khan | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Sabrina Khan — Frontend Engineer specializing in React, Next.js & TypeScript, expanding into scalable full-stack development with Node.js & MongoDB. 1+ year industry experience.",
  keywords: [
    "Sabrina Khan",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Software Engineer",
    "Dhaka",
  ],
  authors: [{ name: "Sabrina Khan" }],
  openGraph: {
    title: "Sabrina Khan | Frontend & Full-Stack Developer",
    description:
      "Frontend Engineer with 1+ year enterprise experience crafting robust web applications with Next.js, React, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-midnight-900 text-slateText-primary font-sans antialiased selection:bg-accent selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
