import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "介護の仕事応援ポータル - SAMPLE KAIGO PORTAL NEXT",
  description: "介護のお仕事に関するお役立ち情報を幅広くお届けします！お仕事を探している方、介護職で活躍中の方、一緒に働く仲間を探している介護施設の方をサポートします。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-bg-light">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
