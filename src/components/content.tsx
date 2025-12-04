import CTA from "./cta";
import Entrega from "./entrega"
import Countdown from "./ui/countdown";

export default function Content() {
    return (
        <main className="flex flex-col justify-center p-2 items-center bg-[url('content/background.jpg')] bg-cover bg-center bg-no-repeat text-white ">
            <section className=" mt-5 flex flex-col justify-center bg-no-repeat text-white ">

                <div className="flex flex-col justify-center items-center max-w-5xl w-[80vw]text-center gap-5 p-4">

                <h2 className=" m-0 p-0 bebas text-7xl sm:text-5xl text-center max-w-2xl">¡Te pones fuerte, <span className="text-[#F5C542]">como que mañana sale el sol!</span></h2>

                <p className="inter text-3xl font-semibold max-w-[550px] text-center">En esta foto abajo, era apenas un chaval y como solo aplicando la filosofía y estilo de vida de los grandes, como Arnold y Mike Mentzer, <span className="font-bold animate-pulse ">ya era toda una bestia.</span></p>

                <img src="/content/foto-1.jpeg" alt="Imagen de contenido método G-FLUX" className=" saturate-160 mt-4 mb-4 max-w-[600px] rounded-lg shadow-lg "/>

                    <div className="bg-linear-to-b from-transparent to-[#101010] w-screen p-6 rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg">
                        <h2 className=" m-0 p-0 bebas text-7xl text-center">¿Que es el <span className="text-[#F5C542]">Método G-flux?</span></h2>

                        <p className="inter text-3xl font-semibold max-w-[700px] text-center">Es el método para mantenerte en forma toda tu vida. Procurando moverte más, entrenar duro y comer más. Buscando siempre mantener un % de grasa bajo, un nivel de Testosterona alto, <span className="font-bold text-[#F5C542]">todo de forma natural.</span></p>

                        <img src="/content/foto-2.jpeg" alt="Imagen de contenido método G-FLUX" className=" saturate-160 mt-4 mb-4 max-w-[600px] rounded-lg shadow-lg "/>

                        <p className="inter text-3xl font-semibold max-w-[700px] text-center pb-10">Aplicando este simple método, he podido mantener un increíble físico a lo largo de mi vida, ayudándome a conseguir oportunidades, que jamás habría conseguido, siendo un pusilánime que apenas pese 50 kg con la ropa mojada.<span className="font-bold text-[#F5C542]">¡Suerte Fuerte, Te Abre Las Puertas A Infinitas Oportunidades!</span></p>
                    </div>

                    <CTA />
                    <Entrega />
                    <Countdown />
                </div>
            </section>
        </main>
    )
}