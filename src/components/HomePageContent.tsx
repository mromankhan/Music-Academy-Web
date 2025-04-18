"use client";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpComingWebniars from "@/components/UpComingWebniars";
import Navbar from "./Navbar";

export default function HomePageContent() {
    return (
        <>
        <div className="relative w-full flex items-center justify-center">
        <Navbar />
        </div>
            <main className="min-h-screen bg-black/[0.96] antialiased
     bg-grid-white/[0.02]">
                <HeroSection />
                <FeaturedCourses />
                <WhyChooseUs />
                <MusicSchoolTestimonialCards />
                <UpComingWebniars />
                <Instructors />
                <Footer />
            </main>
        </>
    );
}
