import HighLight from "./ui/highlight"
import EntregaCard from "./entregaCard"

export default function Entrega() {
    return (
        <section className="flex flex-col max-w-[90vw] items-center justify-center gap-10 mt-5 xl:max-w-[730px]">
            <h2 className="bebas text-5xl max-w-2xl text-center text-balance md:text-8xl xl:text-8xl xl:max-w-[730px] xl:mt-20">¿Qué Obtendrás Con El <span className="text-[#F5C542]">Método G-Flux?</span></h2>
                <EntregaCard 
                    src='/content/foto-3.png'
                    alt='excel'
                >
                    Se te entrega un EXCEL con una 
                    <HighLight
                    highlightText=" rutina de 3 meses 100% personalizada a tu caso, "
                    ></HighLight>
                    ya que llenarás un formulario, para que te llegue un plan acorde a tu nivel, capacidad y equipo del gym disponible.
                </EntregaCard>
                
                <EntregaCard 
                    src='/content/foto-4.png'
                    alt='seguimiento-24/7'
                    cover = {false}
                >
                    <HighLight
                    highlightText="Seguimiento 24/7 "
                    ></HighLight>
                    para responder tus dudas durante tus días de entrenamiento, corrección de técnica e intensidad.
                </EntregaCard>

                <EntregaCard 
                    src='/content/foto-5.jpg'
                    alt='seguimiento-24/7'
                >
                    Recomendación de suplementos
                    <HighLight
                    highlightText=" acorde a objetivo y necesidades personales. "
                    ></HighLight>
                    
                </EntregaCard>

                <EntregaCard 
                    src='/content/Foto-6.jpg'
                    alt='seguimiento-24/7'
                >
                    <HighLight
                    highlightText="Dieta adaptada a ti "
                    ></HighLight>
                    con el seguimiento en el plan de nutrición personalizado. 
                </EntregaCard>
            
        </section>
    )
}