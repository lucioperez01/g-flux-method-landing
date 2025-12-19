interface ctaButtonProps {
    price?: string;
    previousPrice?: string;
}

export default function CtaButton({price, previousPrice}: ctaButtonProps) {
    const CTA_LINK: string = 'https://wa.link/pox92k'
    return(
        <div className="flex flex-col items-center justify-center bg-radial from-[#f5c54257] via-transparent to-transparent w-screen p-10">
            {/* <div className="relative">
                <p className="bebas text-4xl md:text-5xl text-[#fffa] before:content-[''] before:absolute before:top-[40%] before:left-0 before:h-1 before:w-full before:bg-[#fff9] before:-rotate-5">
                ANTES {previousPrice}
                </p>
            </div> */}
            
            <button className="bebas text-3xl md:text-6xl p-3 bg-[#B81D24] hover:bg-[#922121] transition-colors border-3 rounded-sm shadow-2xl">
                <a href={CTA_LINK} className="cursor:pointer animate-none" target="_blank" rel="noopener noreferrer">¡Agendar una cita ahora!
                </a>
            </button>
        </div>
    )
}