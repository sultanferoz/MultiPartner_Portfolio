import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import TestimonialsSection from "@/components/testimonials-section";
import PortfolioPage from "@/components/portfolio-section";
import PortfolioData from "@/components/porfolio-data";
import ScaleSection from "@/components/who-section";
import EducationAndCerts from "@/components/education-sectioin";

export default function About() {
  return (
    <main className="w-full overflow-hidden min-h-screen ">
      <Navbar />
      <div className="h-[81px]"></div>
      <ScaleSection/>
      <PortfolioData/>
      <EducationAndCerts/>
      <Footer />
    </main>
  );
}
