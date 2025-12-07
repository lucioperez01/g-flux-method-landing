import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Countdown() {
  // --- CONFIGURACIÓN DEL TIEMPO ---
  // 10 minutos desde que el usuario entra
  const initialSeconds = 10 * 60

const [seconds, setSeconds] = useState(initialSeconds)

useEffect(() => {
    if (seconds <= 0) return

    const interval = setInterval(() => {
        setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
}, [seconds])

  // --- FORMATEO ---
const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")

const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")

return (
    <div className="flex flex-col items-center gap-0 py-10">
        <h2 className="text-5xl bebas text-center text-balance z-1 max-w-[80vw] rounded-xl md:text-7xl lg:text-9xl xl:text-6xl xl:mt-10 xl:max-w-[550px]">
        Oferta disponible solo por <span className="text-[#F5C542]">tiempo limitado</span>
    </h2>

    <video src="/content/video-2.mp4" autoPlay muted loop className="h-[450px] w-[700px] shadow-lg object-cover rounded-4xl mt-5 md:m-4 lg:h-[900px] lg:w-[900px] xl:h-[710px] xl:w-[550px]"></video>

    <div className="text-8xl -mt-11 px-5 bg-black tracking-wider bebas text-white rounded-xl shadow-lg md:m-0 md:text-9xl lg:mt-5 xl:text-9xl xl:mt-0 xl:max-w-[550px]">
        {minutes}:{secs}
    </div>

    <p className="inter text-balance text-center font-bold text-4xl mt-6 max-w-[80vw] text-white md:text-4xl xl:text-4 xl:max-w-[550px] ">
        Cuando el tiempo llegue a 0, <span className="text-[#F5C542]">la oferta desaparecerá.</span>
    </p>

    
    {seconds <= 0 ? null : (
        <Button className="text-3xl bebas mt-10 p-8 py-6 pt-6 items-center max-w-[80vw] justify-center bg-[#B81D24] hover:bg-[#922121] hover:animate-none transition-colors border-3 md:text-5xl md:mt-9 md:py-8 md:px-3 "><a href="https://w.app/g-flux" className="cursor:pointer animate-pulse" target="_blank" rel="noopener noreferrer">QUIERO APROVECHAR LA OFERTA</a></Button>
        )}
        
    </div>
)
}
