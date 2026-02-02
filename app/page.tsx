import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ExpertiseSection from "@/components/expertise-section"
import TestimonialsSection from "@/components/testimonials-section"
import ScaleSection from "@/components/who-section"
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
      <ScaleSection />
      <FAQs/>
      <OfferSection />
      <Footer />
    </main>
  )
}
