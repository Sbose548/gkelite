import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Include Bootstrap Icons
import BootstrapClient from "./components/BootstrapClient";

export const metadata = {
  title: "GKELITE-INFO",
  description: "GKELITE-INFO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
