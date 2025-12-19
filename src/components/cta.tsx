import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import Title from "@/components/ui/title"
import HighLight from "@/components/ui/highlight"
import CtaButton from "@/components/ui/ctaButton"
import SubTitle from "./ui/subTitle"

export default function CTA() {
    let titleWidth = "80vw"
    let titleSize = "5xl"
    let titleMdSize = "8xl";
    let titleXlSize = "8xl";
    let titleXxlMaxWidth = "730px";
    let price = '99€'
    let previousPrice = '299€'

    return (
        <div className="bg-linear-to-b from-transparent via-[#f5c54257] to-transparent bg-blend-darken -mt-5 w-screen rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg ">   

        <div className="w-full h-35 bg-linear-to-b from-black/99 to-transparent blur-xl"></div>

            <Title
                maxWidth = {titleWidth}
                size={titleSize}
                mdSize = {titleMdSize}
                xlSize = {titleXlSize}
                xxlMaxWidth = {titleXxlMaxWidth}
                >
                    Historias reales de <HighLight
                    isAnimated={true}
                    isOrange={true} highlightText="transformación:"></HighLight>
            </Title>

            

            <div className="w-full max-w-[80vw] flex flex-col items-center justify-center xl:max-w-[450px]">
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


                <CtaButton
                price={price}
                previousPrice={previousPrice}
                >
                </CtaButton>
                

            </div>
        </div>
    )
}