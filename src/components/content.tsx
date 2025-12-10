import CTA from "@/components/cta";
import Entrega from "@/components/entrega"
import Countdown from "@/components/countdown";
import Outro from "@/components/outro";
import Intro from '@/components/intro'
import Footer from "./footer";

export default function Content() {
    return (
        <main className="flex flex-col justify-center p-2 items-center bg-[url('/content/background.jpg')] backdrop-blur-lg backdrop-contrast-50 backdrop-opacity-40 bg-cover bg-center bg-no-repeat text-white max-w-screen">
            <section className=" mt-5 flex flex-col justify-center bg-no-repeat text-white ">
                <div className="flex flex-col justify-center items-center max-w-screen w-[80vw] text-center gap-5 p-4 x">
                    <Intro />
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