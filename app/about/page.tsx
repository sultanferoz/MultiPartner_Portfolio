import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import EducationAndCerts from "@/components/education-sectioin";

export default function About() {
  return (
    <main className="bg-secondary w-full overflow-hidden min-h-screen ">
      <Navbar />
      <div className="h-[81px]"></div>
      <EducationAndCerts/>
      <Footer />
    </main>
  );
}
