import CTA from "@/components/cta";
import Entrega from "@/components/entrega"
import Countdown from "@/components/countdown";
import Outro from "@/components/outro";
import Footer from "@/components/footer";

export default function Content() {
    return (
        <main className="flex flex-col justify-center p-2 items-center bg-[url('/content/background.jpg')] backdrop-blur-lg backdrop-contrast-50 backdrop-opacity-40 bg-cover bg-center bg-no-repeat text-white max-w-screen">
            <section className=" mt-5 flex flex-col justify-center bg-no-repeat text-white ">

                <div className="flex flex-col justify-center items-center max-w-screen w-[80vw] text-center gap-5 p-4 x">

                    <h2 
                    className=" m-0 p-0 bebas text-5xl sm:text-5xl text-center text-balance max-w-[80vw] md:text-7xl xl:text-[5rem] xl:text-balance xl:max-w-[730px]"
                    >¡Te pones fuerte, <span className="text-[#F5C542]">como que mañana sale el sol!</span></h2>

                <div className="flex flex-col-reverse justify-center items-center gap-6 2xl:flex-row">
                    
                    <img src="/content/foto-1.jpeg" alt="Imagen de contenido método G-FLUX" 
                                        className="saturate-160 mt-4 mb-4 max-w-[280px] rounded-lg shadow-lg md:max-w-[600px] xl:max-w-[250px]"/>
                    <p className="inter text-xl font-semibold max-w-[80vw] text-balance text-center md:text-2xl md:w-[600px] xl:text-3xl xl:text-justify xl:max-w-[450px]">En esta foto, era apenas un chaval y como solo aplicando la filosofía y estilo de vida de los grandes, como Arnold y Mike Mentzer, <span className="font-bold animate-pulse ">ya era toda una bestia.</span></p>
                </div>

                    
                    <div className="bg-linear-to-b from-transparent to-[#101010] w-screen p-6 rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg">
                        <h2 className=" m-0 p-0 bebas text-6xl text-balance text-center md:text-7xl xl:text-[5rem] xl:text-balance"
                        >¿Que es el <span className="text-[#F5C542]">Método G-flux?</span></h2>

                        <div className="flex flex-col-reverse justify-center items-center gap-6 2xl:flex-row">
                            <img src="/content/foto-2.jpeg" alt="Imagen de contenido método G-FLUX" className=" saturate-160 mt-4 mb-4 max-w-[280px] rounded-lg shadow-lg md:max-w-[600px] xl:max-w-[250px] "/>

                            <p 
                            className="inter text-xl font-semibold max-w-[85vw] text-balance text-center md:text-3xl xl:text-xl xl:text-justify xl:max-w-[450px] 2xl:text-2xl"
                            >Es el método para mantenerte en forma toda tu vida. Procurando moverte más, entrenar duro y comer más. Buscando siempre mantener un % de grasa bajo, un nivel de testosterona alto, <span className="font-bold text-[#F5C542]">todo de forma natural.</span></p>

                            
                        </div>


                        <p className="inter text-lg font-semibold max-w-[83vw] text-center pb-10 md:text-3xl xl:text-xl xl:text-justify xl:max-w-[730px]">Aplicando este simple método, he podido mantener un increíble físico a lo largo de mi vida, ayudándome a conseguir oportunidades, que jamás habría conseguido, siendo un pusilánime que apenas pese 50 kg con la ropa mojada.<span className="font-bold text-[#F5C542]"> ¡Suerte Fuerte, Te Abre Las Puertas A Infinitas Oportunidades!</span></p>


                    </div>

                    <CTA />
                    <Entrega />
                    <Countdown />
                    <Outro />
                    <Footer />
                </div>
            </section>
        </main>
    )
}