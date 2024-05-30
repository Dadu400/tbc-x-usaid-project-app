import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default DashboardLayout;
