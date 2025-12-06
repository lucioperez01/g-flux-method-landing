import { Button } from "@/components/ui/button"

export default function Outro() {
    return (
        <section className="flex flex-col max-w-[80vw] items-center justify-center gap-10 pb-10 xl:max-w-[730px]">
            <h2 className="bebas text-5xl text-center text-balance z-1 max-w-[80vw] md:text-7xl lg:text-8xl xl:text-6xl xl:max-w-[730px]">¡Felicidades por dar el primer paso hacia tu <span className="text-[#F5C542]">transformación!</span></h2> 

            <div className="flex flex-col items-center justify-center gap-6 md:gap-10 xl:gap-8 bg-gray-900 p-5 rounded-xl border-3 border-[#F5C542] ">
            <img src="content/Foto-7.jpeg" alt="metodo-g-flux" className="rounded-lg shadow-lg max-w-[300px] saturate-160 md:max-w-[600px] lg:max-w-[700px] xl:max-w-[550px]"/>

            <p className="inter font-bold text-xl text-justify text-balance max-w-[80vw] md:text-4xl md:text-center md:px-1 xl:text-2xl xl:text-justify xl:max-w-[550px]">Comienza <span className="text-[#F5C542]">HOY</span> tu camino hacia la grandeza, ser un hombre del 1%, donde en un mundo de débiles, vas a destacar grandemente, haciéndome caso, dándole control a tu vida y <span className="text-[#F5C542]">encontrando esa fuerza interna que tienes dormida</span>.</p>
            </div>
            <p className="bebas text-5xl max-w-[90vw] text-balance text-center md:text-7xl xl:text-6xl xl:p-5 2xl:max-w-[730px]">Recuerda, <span className="text-[#F5C542]">la disciplina es el puente entre tus metas y tus logros.</span> ¡Nos vemos adentro!</p>

            <Button className="text-3xl bebas  p-4 py-6 pt-7  items-center justify-center bg-[#B81D24] hover:bg-[#922121] hover:animate-none transition-colors border-3 md:text-6xl md:py-11 xl:text-6xl xl:mt-5 xl:p-8 xl:px-6 xl:pt-10"><a href="https://w.app/g-flux" className="cursor:pointer animate-none" target="_blank" rel="noopener noreferrer">¡Empieza hoy por sólo 30$!</a></Button>

        </section>
    )
}