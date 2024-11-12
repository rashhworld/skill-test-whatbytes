import "./globals.css";

export const metadata = {
  title: "Whatbytes Dashboard",
  description: "Whatbytes Dashboard",
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
