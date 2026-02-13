import type { Metadata } from "next"
import Navbar from "@/components/navbar";
import TeamHeroSection from "@/components/team-hero-section";
import TeamMembersSection from "@/components/team-members-section";
import Footer from "@/components/footer";
import "../globals.css"
import TestimonialsSection from "@/components/testimonials-section";
import OfferSection from "@/components/offer-section";
import FAQs from "@/components/FAQs";


export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the expert Data Scientists and AI Developers at DCode Analytics."
}
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
