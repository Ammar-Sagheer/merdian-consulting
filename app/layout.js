import "@/app/_styles/globals.css";

import SiteChrome from "@/app/_components/layout/SiteChrome";

export const metadata = {
  title: "Meridian Digital Consulting",
  description: "Practical technology, built to last.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
