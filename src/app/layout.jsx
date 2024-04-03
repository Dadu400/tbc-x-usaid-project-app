import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../index.css";

export const metadata = {
  title: "unOfficial Lego",
  description: "Web site created with Next.js.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
