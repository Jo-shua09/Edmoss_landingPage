import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function AppLayout() {
  return (
    <div className="w-full m-auto max-w-[185rem]">
      <Header />
      <main className="pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
