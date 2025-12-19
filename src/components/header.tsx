import { motion } from 'framer-motion';
import Title from './ui/title';

export default function Header() {
    const BACKGROUND_IMAGE_URL: any = encodeURI('/content/background-1.jpg')
    const titleSize: string = "6xl" 
    const maxWidth: string = "730px"
    const mdSize: string = "4xl"
    const xlSize: string = "4xl"
    const titleXxlSize: string = "5rem"


    return (
        <header 
        className="relative bg-position-[50%_top] text-white h-[40vh] flex flex-col justify-center items-center max-w-full 2xl:h-[60vh]" 
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 flex flex-col justify-center items-center max-w-full 2xl:h-[40vh] ">

            <h1 className="bebas text-6xl xs:text-6xl lg:text-9xl md:text-8xl sm:text-7xl xl:text-[20rem] 2xl:text-[8.5rem]">Método G-FLUX:</h1>
                <motion.p 
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}  
                    className="inter text-[14px] lg:text-3xl md:text-2xl sm:max-w-[80vw] font-bold xl:text-[5rem] 2xl:text-[2.07rem] 2xl:max-w-[730px]"
                    >Come <span className=" text-[#B81D24]">mucho</span>, pierde Grasa y <span className="animate-pulse text-[#F5C542]">Gana Músculo.</span>
                </motion.p>

                <p className="inter text-sm text-center text-balance md:text-2xl xl:text-[5rem] 2xl:text-[1.2rem]">PLAN <span className=" text-[#F5C542]">PERSONALIZADO</span> DE ENTRENAMIENTO Y NUTRICIÓN <span className=" text-[#F5C542]">DE 3 MESES.</span></p>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-b from-transparent to-black -mb-5"></div>
        </header>
    )
}