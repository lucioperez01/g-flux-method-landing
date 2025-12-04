export default function Entrega() {
    return (
        <section className="flex flex-col max-w-[90vw] items-center justify-center gap-10 ">
            <h2 className="bebas text-8xl max-w-2xl text-center mt-20">¿Qué Obtendrás Con El <span className="text-[#F5C542]">Método G-Flux?</span></h2>

            <div className="flex items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] 
            w-full h-lg" >
                <img src="/content/foto-3.png" alt="excel" className="h-30" />
                <p className="inter text-2xl font-bold max-w-xl text-center">Se te entrega un EXCEL con una rutina de 3 meses 100% personalizada a tu caso, ya que llenarás un formulario, para que te llegue un plan acorde a tu nivel, capacidad y equipo del gym disponible.</p>
            </div>

            <div className="flex items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg">
                <img src="/content/foto-4.png" alt="excel" className="h-30 pl-10" />
                <p className="inter text-2xl font-bold max-w-lg text-center">Seguimiento 24/7, para responder tus dudas durante tus días de entrenamiento, corrección de técnica e intensidad.</p>
            </div>

            <div className="flex items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg min-w-[500px]">
                <img src="/content/foto-5.jpg" alt="excel" className="h-35 w-40 object-cover" />
                <p className="inter text-2xl font-bold max-w-lg text-center">Recomendación de suplementos acorde a objetivo y necesidades personales.</p>
            </div>

            <div className="flex items-center justify-center gap-4 bg-linear-to-tr from-[#f5c5423a] to transparent p-5 rounded-xl border-3 border-[#F5C542] w-full h-lg min-w-[500px]">
                <img src="/content/Foto-6.jpg" alt="excel" className="h-35 w-40 object-cover" />
                <p className="inter text-2xl font-bold max-w-lg text-center"> Dieta adaptada a ti con el seguimiento en el plan de nutrición personalizado.</p>
            </div>

        </section>
    )
}