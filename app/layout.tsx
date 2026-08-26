import type { Metadata } from "next";
import "./globals.css";

const description =
  "Portfolio of Jagan M, a final-year B.E. CSE student with Honours in AI and Machine Learning, building intelligent full-stack experiences.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(
    siteUrl,
  ),
  title: "Jagan M — Full Stack Developer & AI Engineer",
  description,
  openGraph: {
    title: "Jagan M — Full Stack Developer & AI Engineer",
    description,
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagan M — Full Stack Developer & AI Engineer",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
