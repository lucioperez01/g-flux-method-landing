export default function Entrega() {
    return (
        <section className="flex flex-col max-w-[90vw] items-center justify-center gap-10 mt-5 xl:max-w-[730px]">
            <h2 className="bebas text-5xl max-w-2xl text-center text-balance md:text-8xl xl:text-8xl xl:max-w-[730px] xl:mt-20">¿Qué Obtendrás Con El <span className="text-[#F5C542]">Método G-Flux?</span></h2>

            <div className="flex flex-col items-center justify-center bg-linear-to-tr from-[#f5c5423a] to transparent gap-4 p-5 rounded-xl border-3 border-[#F5C542] w-full min-h-lg md:flex-row md:h-65 xl:max-w-[730px] xl:min-h-[100px] xl:h-40  ">
                <img src="/content/foto-3.png" alt="excel" className="h-40 pt-5 object-center object-cover md:-translate-y-2.5 xl:max-h-30 " />
                <p className="inter text-lg font-bold max-w-[80vw] text-center text-balance md:max-h-50 md:text-justify md:px-3 md:text-2xl xl:text-lg  ">Se te entrega un EXCEL con una <span className="text-[#F5C542]">rutina de 3 meses 100% personalizada a tu caso,</span> ya que llenarás un formulario, para que te llegue un plan acorde a tu nivel, capacidad y equipo del gym disponible.</p>
            </div>

            <div 
            className="flex flex-col items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg md:flex-row md:h-65 xl:max-w-[730px] xl:min-h-[100px] xl:h-40 ">
                <img src="/content/foto-4.png" alt="excel" className="h-30 pl-10 -translate-x-4 md:translate-x-3 xl:h-20" />
                <p className="inter text-xl font-bold max-w-[80vw] text-justify md:text-3xl md:px-9 xl:text-lg"> <span className="text-[#F5C542]">Seguimiento 24/7,</span> para responder tus dudas durante tus días de entrenamiento, corrección de técnica e intensidad.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg md:flex-row md:h-65 xl:max-w-[730px] xl:min-h-[100px] xl:h-40 ">
                <img src="/content/foto-5.jpg" alt="excel" 
                className="h-35 w-50 object-cover xl:h-30 xl:w-40" />
                <p className="inter text-2xl font-bold max-w-[80vw] text-center text-balance md:text-wrap md:text-justify md:text-3xl md:p-2 xl:text-lg">Recomendación de suplementos <span className="text-[#F5C542]">acorde a objetivo y necesidades personales.</span></p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg md:flex-row md:h-65 xl:max-w-[730px] xl:min-h-[100px] xl:h-40 ">
                <img src="/content/Foto-6.jpg" alt="excel" className="h-35 w-40 object-cover md:translate-x-8 xl:h-25 xl:w-35" />
                <p className="inter text-2xl font-bold max-w-[80vw] text-center text-balance md:text-3xl md:p-4 xl:text-lg"> <span className="text-[#F5C542]">Dieta adaptada a ti</span> con el seguimiento en el plan de nutrición personalizado.</p>
            </div>

        </section>
    )
}