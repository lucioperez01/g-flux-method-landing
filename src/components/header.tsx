import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="bg-linear-to-b from-[#1c1c1c] to-[#040404] h-[26vh] text-white flex flex-col justify-center items-center max-w-full  2xl:h-[40vh]">
        <h1 className="bebas text-6xl xs:text-6xl lg:text-9xl md:text-8xl sm:text-7xl xl:text-[20rem] 2xl:text-[5.5rem]">Método G-FLUX:</h1>
            <motion.p 
                initial={{ opacity: 0, y: -20}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inter text-[14px] lg:text-3xl md:text-2xl sm:max-w-[80vw] font-bold xl:text-[5rem] 2xl:text-[1.29rem]">Come <span className=" text-[#B81D24]">mucho</span>, pierde Grasa y <span className="animate-pulse text-[#F5C542]">Gana Músculo.</span>
            </motion.p>

            <p className="bebas text-sm text-center text-balance mt-2 md:text-2xl xl:text-[5rem] 2xl:text-[1.32rem]">PLAN <span className=" text-[#F5C542]">PERSONALIZADO</span> DE ENTRENAMIENTO Y NUTRICIÓN <span className=" text-[#F5C542]">DE 3 MESES.</span></p>

        </header>
    )
}