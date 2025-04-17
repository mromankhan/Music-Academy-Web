import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

type instructorsType = {
    id : number,
    name: string,
    designation: string,
    image: string
}

const instructors: instructorsType[] = [
    {
        id: 1,
        name: 'PM Imran Khan',
        designation: 'Vocal Coach',
        image: "/imranKhan.jpeg"
    },
    {
        id: 2,
        name: 'Elon Musk',
        designation: 'Guitar Instructor',
        image: "/elonMusk.jpeg"

           
    },
    {
        id: 3,
        name: 'Mark Zekerburg',
        designation: 'Piano Teacher',
        image: "/markZekerburg.jpeg"
            
    },
    {
        id: 4,
        name: 'Billgates',
        designation: 'Drumming Expert',
        image: "/billgates.jpeg"
           
    },
];

export default function Instructors() {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    )
}
