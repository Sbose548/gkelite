
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapClient from "./components/BootstrapClient";




export const metadata = {
  title: "GKELITE-INFO-Contact",
  description: "GKELITE-INFO-Contact",
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
