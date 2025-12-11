
import { Instagram, Youtube, Twitter, Linkedin, Mail, Github } from "lucide-react";


export default function Footer() {
    return (
        <footer className="inter font-semibold text-white flex flex-col items-center justify-center p-5 gap-1 max-w-screen border-t-2 border-[#f5c542ac] to-transparent ">
            <p className="inter text-sm text-center max-w-[80vw] md:text-xl lg:text-3xl xl:text-lg">© 2026 Método G-Flux. Todos los derechos reservados.</p>
            <p className="inter text-sm text-center max-w-[90vw] text-balance mt-1 md:text-xl lg:text-3xl xl:text-lg">Sitio web diseñado y desarrollado por <span className="text-[#F5C542] font-bold">Lucio Pérez - Lutec ®.</span></p>

            <div className="flex flex-row gap-2 text-white">
                <a href="mailto:perezluciogabriel@gmail.com" className="text-[#F5C542] hover:underline cursor-pointer"> 
                    <Mail className='icon-responsive'/>
                </a>
                <a href="https://www.linkedin.com/in/lucio-p%C3%A9rez-0a0047234/" 
                    className="text-[#F5C542] hover:underline cursor-pointer"> 
                        <Linkedin className='icon-responsive'/>
                </a>
                <a href="https://www.instagram.com/lutec.dev?igsh=ZjV0a3dvZmhzM2tu" 
                    className="text-[#F5C542] hover:underline cursor-pointer lg:text-3xl"> 
                        <Instagram className='icon-responsive'/>
                </a>

                <a href="https://github.com/lucioperez01" 
                    className="text-[#F5C542] hover:underline cursor-pointer lg:text-3xl"> 
                        <Github className='icon-responsive'/>
                </a>
            </div>
        </footer>
    )
}