import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { ReactNode } from "react";
import ParticlesBackground from "../../../components/particles/ParticlesBackground";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ParticlesBackground />
    </>
  );
}

export default DashboardLayout;
