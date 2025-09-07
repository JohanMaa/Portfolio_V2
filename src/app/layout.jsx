import "./globals.css";
import LayoutClient from "./layout-client";

export const metadata = {
  title: "Johan Maulana",
  description: "A portfolio inspired by Brittany Chiang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB] text-[#111827] font-inter antialiased">
      <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}