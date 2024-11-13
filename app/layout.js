import "./globals.css";

export const metadata = {
  title: "Student Dashboard | Whatbytes",
  description: "Dashboard for students of Whatbytes",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
