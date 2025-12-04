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
        <div className="bg-linear-to-b from-transparent via-[#f5c54257] to-transparent bg-blend-darken -mt-5 w-screen p-10 rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg">   

            <h2 className=" m-0 p-0 bebas text-8xl text-center max-w-2xl">Historias reales de <span className="text-[#F5C542] animate-pulse">transformación:</span></h2>
            <div className="w-full max-w-2xl mx-auto mt-3 flex flex-col items-center justify-center">
                <Carousel className="max-w-[700px]" aria-label="Historias reales de transformación"
                opts={{
                    loop:true,
                    align: "start"
                }}

                plugins={[
                    Autoplay({
                        delay: 2500,
                        stopOnInteraction: true,
                    }),
                ]}
                >
                    <CarouselContent>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <CarouselItem key={i}>
                        <div className="p-5  text-white rounded-lg text-center shadow-lg">
                            <img src={`content/historia-real-${i + 1}.png`} alt={`historia real método g-flux ${i + 1}`} className="saturate-160 max-w-full h-auto rounded-lg shadow-lg mx-auto" />
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                
                <h2 className="mt-5 p-0 bebas text-8xl text-center  max-w-3xl ">¿Listo para <span className="text-[#de0914] animate-pulse">transformar</span> tu vida?</h2>

                <Button variant="destructive" size="lg" className="text-5xl bebas mt-5 p-6 py-10 pt-11 items-center justify-center bg-[#B81D24] hover:bg-[#922121] hover:animate-none transition-colors border-3 border- "><a href="https://w.app/g-flux" className="cursor:pointer animate-none" target="_blank" rel="noopener noreferrer">¡Empieza hoy por 25$!</a></Button>
                
            </div>
        </div>
    )
}