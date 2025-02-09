"use client";
import { StickyScroll } from "./sticky-scroll-reveal";

const musicSchoolContent = [
    {
      "title": "Beginner Guitar Lessons",
      "description": "Learn the basics of guitar, including chords, scales, and techniques for strumming and fingerpicking. Perfect for absolute beginners."
    },
    {
      "title": "Advanced Piano Techniques",
      "description": "For experienced piano players looking to enhance their skills with advanced techniques such as arpeggios, improvisation, and complex rhythms."
    },
    {
      "title": "Vocal Training for Singers",
      "description": "Improve your vocal range, breath control, and pitch accuracy with personalized training tailored for singers of all levels."
    },
    {
      "title": "Drumming for Beginners",
      "description": "A beginner's course to learn basic drumming patterns, coordination, and timing, focusing on rock and pop music styles."
    },
    {
      "title": "Music Theory Fundamentals",
      "description": "Understand the building blocks of music theory, including scales, chords, and progressions. Ideal for musicians looking to strengthen their foundation."
    },
    {
      "title": "Electronic Music Production",
      "description": "Explore the world of electronic music production with software like Ableton Live and FL Studio, covering beat-making, sound design, and mixing."
    },
    {
      "title": "Jazz Improvisation Workshop",
      "description": "Learn how to improvise in a jazz context, focusing on scales, modes, and the underlying theory behind famous jazz standards."
    },
    {
      "title": "Classical Violin Mastery",
      "description": "A course for intermediate to advanced violinists focusing on classical repertoire, technical skills, and expressive playing."
    }]


export default function WhyChooseUs() {
  return (
    <>
   <div>
    <StickyScroll content={musicSchoolContent} />
   </div>
    </>
  )
}
