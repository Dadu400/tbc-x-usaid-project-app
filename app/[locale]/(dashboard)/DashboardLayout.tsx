import Header from "../../../components/header/Header";
// import Footer from "../../../components/footer/Footer";
import { ReactNode } from "react";
import ParticlesBackground from "../../../components/particles/ParticlesBackground";

interface DashboardLayoutProps {
  children: ReactNode;
  useParticles?: boolean;
}

function DashboardLayout({ children, useParticles = true }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
      {useParticles && <ParticlesBackground />}
    </>
  );
}

export default DashboardLayout;
