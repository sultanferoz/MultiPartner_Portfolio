import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ExpertiseSection from "@/components/expertise-section"
import OfferSection from "@/components/offer-section"
import Footer from "@/components/footer"
import FAQs from "@/components/FAQs"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar/>
      <HeroSection />
      <FeaturesSection />
      <ExpertiseSection />
      <FAQs/>
      <OfferSection />
      <Footer />
    </main>
  )
}
