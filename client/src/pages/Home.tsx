/*
 * 南鐸書院 · 官方網站首頁
 * Design: 玄·深 — Dark Oriental Luxury
 * Sections: Hero → About → Courses → Membership → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <MembershipSection />
      <ContactSection />
    </div>
  );
}
