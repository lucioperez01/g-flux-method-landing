import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="bg-linear-to-b from-[#1c1c1c] to-[#040404] h-[35vh] text-white flex flex-col justify-center items-center">
        <h1 className="bebas lg:text-9xl md:text-9xl sm:text-7xl font-[Bebas\ Neue]">Método G-FLUX:</h1>
            <motion.p 
                initial={{ opacity: 0, y: -20}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="inter lg:text-3xl md:text-3xl sm:max-w-[80vw] font-bold ">Come <span className=" text-[#B81D24]">mucho</span>, pierde Grasa y <span className="animate-pulse text-[#F5C542]">Gana Músculo.</span>
            </motion.p>
        </header>
    )
}