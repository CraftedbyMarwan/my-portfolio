import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Marwan Mohammed | Portfolio",
  description: "Portfolio of Marwan Mohammed, a software engineer specializing in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
