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
    <div className="flex flex-col items-center gap-4 py-10">
    <h2 className="text-8xl bebas text-center max-w-5xl z-1 p-6 rounded-xl">
        Oferta disponible solo por <span className="text-[#F5C542]">tiempo limitado</span>
    </h2>

    <video src="/content/video-2.mp4" autoPlay muted loop className="h-[880px] w-[900px] shadow-lg object-cover rounded-xl"></video>

    <div className="text-[150px] -mt-15 tracking-wider bebas bg-black text-white px-8 rounded-xl shadow-lg">
        {minutes}:{secs}
    </div>

    <p className="text-center inter font-bold text-3xl max-w-2xl text-white">
        Cuando el tiempo llegue a 0, <span className="text-[#F5C542]">la oferta desaparecerá.</span>
    </p>

    
    {seconds <= 0 ? null : (
        <Button variant="destructive" size="lg" className="text-5xl bebas mt-5 p-6 py-10 pt-11 items-center justify-center bg-[#B81D24] hover:bg-[#922121] hover:animate-none transition-colors border-3 border- "><a href="https://w.app/g-flux" className="cursor:pointer animate-pulse" target="_blank" rel="noopener noreferrer">QUIERO APROVECHAR LA OFERTA</a></Button>
        )}
        
    </div>
)
}
