import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import ScaleSection from "@/components/who-section";
import EducationAndCerts from "@/components/education-sectioin";

export default function About() {
  return (
    <main className="w-full overflow-hidden min-h-screen ">
      <Navbar />
      <div className="h-[81px]"></div>
      <ScaleSection/>
      <EducationAndCerts/>
      <Footer />
    </main>
  );
}
