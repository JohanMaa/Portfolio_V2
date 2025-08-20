import "./globals.css";

export const metadata = {
  title: "Your Portfolio V2",
  description: "A portfolio inspired by Brittany Chiang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#ccd6f6] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}