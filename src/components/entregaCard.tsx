import SmallImage from "@/components/ui/smallImage"
import SubTitle from "@/components/ui/subTitle"
import HighLight from "@/components/ui/highlight"

export default function EntregaCard() {
    return(
        <div className="flex flex-col items-center justify-center bg-linear-to-tr from-[#f5c5423a] to transparent gap-4 p-3 rounded-xl border-3 border-[#F5C542] w-full min-h-lg md:flex-row md:h-65 xl:max-w-[730px] xl:min-h-[100px] xl:h-40  ">
                        <SmallImage
                            src='/content/foto-3.png'
                            alt='excel'
                            h="[10px]"
                            w="[5px]"
                        />
                        <SubTitle
                            maxWidth="80vw"
                            mdMaxWidth="80vw"
                            mdSize="2xl"
                            size="lg"
                            xlSize="lg"
                            xxlSize="lg"
                            xlMaxWidth="730px"
                        >
                            Se te entrega un EXCEL con una 
                            <HighLight
                            highlightText=" rutina de 3 meses 100% personalizada a tu caso, "
                            ></HighLight>
                            ya que llenarás un formulario, para que te llegue un plan acorde a tu nivel, capacidad y equipo del gym disponible.
                        </SubTitle>
                        
                    </div>
    )
}