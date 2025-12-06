import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <div className="bg-linear-to-b from-transparent via-[#f5c54257] to-transparent bg-blend-darken -mt-5 w-screen rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg ">   

            <h2 
            className="bebas text-5xl text-balance text-center max-w-[80vw] md:text-8xl xl:text-8xl xl:my-10 xl:max-w-[730px]"
            >Historias reales de <span className="text-[#F5C542] animate-pulse">transformación:</span>
            </h2>

            <div className="w-full max-w-[80vw] flex flex-col items-center justify-center xl:max-w-[730px]">
                <Carousel className="max-w-[80vw]" aria-label="Historias reales de transformación"
                opts={{
                    loop:true,
                    align: "start"
                }}

                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnInteraction: true,
                    }),
                ]}
                >
                    <CarouselContent>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <CarouselItem key={i}>
                        <div className=" text-white rounded-lg text-center shadow-lg">
                            <img src={`content/historia-real-${i + 1}.png`} alt={`historia real método g-flux ${i + 1}`} className="saturate-160 max-w-full h-auto rounded-2xl shadow-lg " />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                
                <h2 className="mt-10 bebas text-6xl text-center text-balancemax-w-[80vw] md:text-8xl xl:text-6xl">¿Listo para <span className="text-[#de0914] animate-pulse">transformar</span> tu vida?</h2>

                <Button className="text-3xl bebas mt-5 p-4 py-6 pt-7 items-center justify-center bg-[#B81D24] hover:bg-[#922121] hover:animate-none transition-colors border-3 md:text-5xl md:py-11 md:mt-10 xl:text-6xl xl:mt-10 xl:p-10 xl:px-6 xl:pt-11"><a href="https://w.app/g-flux" className="cursor:pointer animate-none" target="_blank" rel="noopener noreferrer">¡Empieza hoy por 30$!</a></Button>
                
            </div>
        </div>
    )
}