import Title from '@/components/ui/title';
import HighLight from '@/components/ui/highlight'
import SubTitle from '@/components/ui/subTitle';
import ImageCard from '@/components/ui/imageCard';
import { title } from 'process';

export default function Intro () {
    // title config
    let titleMaxWidth = "80vw";
    let titleXxlMaxWidth = "730px";
    let titleSize = "5xl";
    let titleMdSize = "7xl"
    let titleXlSize = "5rem";
    // p configs
    let pSize = "lg";
    let pMdSize = "2xl";
    let pXlSize = "xl";
    let pXxlSize = "2xl";
    //img config
    let imgWidth ="280px";
    let imgMdWidth = "600px";
    let imgXlWidth = "250px";
    return (
            <div className="flex flex-col items-center justify-center">    
                    <div className="flex flex-col-reverse justify-center items-center gap-6 2xl:flex-row">   
                    <Title 
                        maxWidth={titleMaxWidth}
                        size={titleSize}
                        mdSize={titleMdSize}
                        xlSize={titleXlSize}
                        xxlMaxWidth={titleXxlMaxWidth}
                            >¡Te pones fuerte, <HighLight 
                            isAnimated={false}
                            isOrange={true}
                        
                            highlightText="como que mañana sale el sol!" />
                    </Title>
                </div> 

                    <div className={`flex flex-col-reverse justify-center items-center gap-6 2xl:flex-row xl:max-w-[${titleXxlMaxWidth}]`}>
                        <ImageCard
                            src="/content/foto-1.jpeg"
                            alt="Imagen de contenido método G-Flux"
                            width= {imgWidth}
                            height="auto"
                            mdWidth={imgMdWidth}
                            xlWidth={imgXlWidth}
                            />

                        <SubTitle
                            maxWidth={titleMaxWidth}
                            mdMaxWidth={titleMaxWidth}
                            xlMaxWidth={titleXxlMaxWidth}
                            size={pSize}
                            mdSize={pMdSize}
                            xlSize={pXlSize}
                            xxlSize={pXxlSize}
                        >
                            En esta foto, era apenas un chaval y como solo aplicando la filosofía y estilo de vida de los grandes, como Arnold y Mike Mentzer, <HighLight 
                            isAnimated={true}
                                isOrange={true}
                                highlightText="ya era toda una bestia." />
                        </SubTitle>
                    </div>

                    
                    <div className="bg-linear-to-b from-transparent to-[#101010] w-screen p-6 rounded-lg flex flex-col justify-center items-center gap-4 shadow-lg">
                        <Title
                            maxWidth={titleMaxWidth}
                            size={titleSize}
                            mdSize={titleMaxWidth}
                            xlSize={titleXlSize}
                            xxlMaxWidth={titleXxlMaxWidth}
                            >
                            ¿Que es el <HighLight 
                                        isAnimated={false}
                                        isOrange={true}
                                        highlightText="Método G-flux?" />
                        </Title>

                    <div className={`flex flex-col-reverse justify-center items-center gap-6 2xl:flex-row xl:max-w-[${titleXxlMaxWidth}]`}>

                            <ImageCard
                                src="/content/foto-2.jpeg"
                                alt="Imagen de contenido método G-FLUX"
                                width={imgWidth}
                                height="auto"
                                mdWidth={imgMdWidth}
                                xlWidth={imgXlWidth}
                            />
                            

                            <SubTitle
                                maxWidth={titleMaxWidth}
                                mdMaxWidth={titleMaxWidth}
                                xlMaxWidth={titleXxlMaxWidth}
                                size={pSize}
                                mdSize={pMdSize}
                                xlSize={pXlSize}
                                xxlSize={pXxlSize}
                                >
                                    Es el método <HighLight 
                                    isAnimated={false}
                                    isOrange={true}
                                    highlightText="para mantenerte en forma toda tu vida." /> Procurando moverte más, entrenar duro y comer más. Buscando siempre mantener un % de grasa bajo, un nivel de testosterona alto, 
                                    <HighLight 
                                        isAnimated={false}
                                        isOrange={true}
                                        highlightText="todo de forma natural."></HighLight>
                                </SubTitle>
                        </div>

                        <SubTitle
                            maxWidth={titleMaxWidth}
                            mdMaxWidth={titleMaxWidth}
                            xlMaxWidth={titleXxlMaxWidth}
                            size={pSize}
                            mdSize={pMdSize}
                            xlSize={pXlSize}
                            xxlSize={pXxlSize}
                            >
                                Aplicando este simple método, he podido mantener un increíble físico a lo largo de mi vida, ayudándome a conseguir oportunidades, que jamás habría conseguido, siendo un pusilánime que apenas pese 50 kg con la ropa mojada. 
                                <HighLight 
                                    isAnimated={false}
                                    isOrange={true}
                                    highlightText="¡Suerte Fuerte, Te Abre Las Puertas A Infinitas Oportunidades!"></HighLight>
                            </SubTitle>
                    </div>
            </div>
    )
}