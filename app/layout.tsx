import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh Kuncham — GenAI QA Expert",
  description: "GenAI QA Expert specializing in enterprise AI quality engineering, responsible AI, and enterprise testing.",
  keywords: ["QA", "GenAI", "Testing", "AI", "Enterprise", "Portfolio"],
  authors: [{ name: "Lokesh Kuncham" }],
  openGraph: {
    title: "Lokesh Kuncham — GenAI QA Expert",
    description: "Specializing in enterprise AI quality engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0d12] text-[#e8ecf4] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}