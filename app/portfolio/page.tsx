import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import PortfolioPage from "@/components/portfolio-section";
import OfferSection from "@/components/offer-section";
import Projects from "@/components/showchase-section";
import FeaturesSection from "@/components/features-section";

export default function TeamPage() {
  return (
    <main className="w-full overflow-hidden min-h-screen">
      <Navbar />
      <PortfolioPage/>
      <Projects/>
      <FeaturesSection />
      <OfferSection/>
      <Footer />
    </main>
  );
}
