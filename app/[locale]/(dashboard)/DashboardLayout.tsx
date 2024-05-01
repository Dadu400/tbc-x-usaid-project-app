import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../../contants";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children}: DashboardLayoutProps) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie?.value) {
    return redirect("/login")
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DashboardLayout;
