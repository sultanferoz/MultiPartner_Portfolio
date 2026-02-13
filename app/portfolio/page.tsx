import type { Metadata } from "next"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css"
import PortfolioPage from "@/components/portfolio-section";
import OfferSection from "@/components/offer-section";
import Projects from "@/components/showchase-section";
import FeaturesSection from "@/components/features-section";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Meet the expert Data Scientists and AI Developers at DCode Analytics."
}

export default function Portfolio() {
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
