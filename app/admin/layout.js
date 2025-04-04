// app/(client)/layout.js
import Header from "@/app/components/admin-components/Header";
import Footer from "@/app/components/admin-components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
