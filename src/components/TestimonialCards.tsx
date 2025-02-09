"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonialCards = [
    {
      quote: "The support and mentorship at this school helped me improve my piano skills tremendously. I couldn't have done it without the personalized attention.",
      name: "Sarah Lee",
      title: "Piano Student"
    },
    {
      quote: "Thanks to the guidance from my instructors, I was able to prepare for and pass my violin exams with confidence.",
      name: "James Anderson",
      title: "Violin Student"
    },
    {
      quote: "I’ve gained so much confidence in my performances since joining this school. The teachers truly care about their students' progress.",
      name: "Anna Rodriguez",
      title: "Guitar Student"
    },
    {
      quote: "Learning at this school has been a transformative experience for me. The teachers are not only talented but also incredibly patient.",
      name: "Liam Johnson",
      title: "Drums Student"
    },
    {
      quote: "Being part of this school has helped me find my passion for classical music, and I’m forever grateful for the amazing faculty here.",
      name: "Olivia Martinez",
      title: "Cello Student"
    },
    {
      quote: "I never thought I could sing in front of an audience, but the vocal coaching here gave me the confidence to perform in a concert!",
      name: "Kevin Parker",
      title: "Vocal Student"
    },
    {
      quote: "This school has the best environment for learning music. The instructors are extremely knowledgeable and approachable.",
      name: "Emma Wilson",
      title: "Flute Student"
    },
    {
      quote: "The personalized feedback I received after each lesson helped me progress faster than I ever imagined!",
      name: "Daniel Kim",
      title: "Saxophone Student"
    },
    {
      quote: "Thanks to the excellent guidance from my teacher, I was able to ace my advanced piano recital with flying colors.",
      name: "Sophia Brown",
      title: "Advanced Piano Student"
    },
    {
      quote: "Joining this school was the best decision for my musical journey. I’ve learned so much and gained lifelong skills.",
      name: "Noah Evans",
      title: "Clarinet Student"
    }
  ];
  

export default function MusicSchoolTestimonialCards() {
  return (
    <>
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl text-white font-bold text-center mt-6 p-2 z-10">Here our Harmony: Voices of sucess</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-4 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonialCards}
        direction="right"
        speed="slow"
      />
        </div>
    </div>
    </div>
    </>
  )
}
