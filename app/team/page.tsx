import Navbar from "@/components/navbar";
import TeamHeroSection from "@/components/team-hero-section";
import TeamMembersSection from "@/components/team-members-section";
import Footer from "@/components/footer";
import "../globals.css"
import TestimonialsSection from "@/components/testimonials-section";
import OfferSection from "@/components/offer-section";
import FAQs from "@/components/FAQs";

export default function TeamPage() {
  return (
    <main className="w-full overflow-hidden min-h-screen">
      <Navbar />
      <TeamMembersSection />
      <FAQs/>
      <OfferSection/>
      <Footer />
    </main>
  );
}
