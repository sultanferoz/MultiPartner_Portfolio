import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import TestimonialsSection from "@/components/testimonials-section";
import PortfolioPage from "@/components/portfolio-section";
import PortfolioData from "@/components/porfolio-data";
import OfferSection from "@/components/offer-section";
import EducationAndCerts from "@/components/education-sectioin";

export default function TeamPage() {
  return (
    <main className="w-full overflow-hidden min-h-screen">
      <Navbar />
      <PortfolioPage/>
      <TestimonialsSection/>
      <EducationAndCerts/>
      <PortfolioData/>
      <OfferSection/>
      <Footer />
    </main>
  );
}
