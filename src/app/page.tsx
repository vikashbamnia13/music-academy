import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import  StickyScroll  from "@/components/StickyScroll";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection/>
      <FeaturedSection/>
      <StickyScroll/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
      
    </main>
  );
}
