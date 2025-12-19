import SmallImage from "@/components/ui/smallImage"
import SubTitle from "@/components/ui/subTitle"

interface entregaCardProps {
    children: React.ReactNode;
    src: string;
    alt: string;
    cover?: boolean;
}

export default function EntregaCard({children, src, alt, cover}: entregaCardProps) {
    return(
        <div className="flex flex-col items-center justify-center bg-linear-to-tr from-[#f5c5423a] to-transparent gap-10 px-10 rounded-xl border-3 border-[#F5C542] md:flex-row md:h-40 xl:max-w-xl 2xl:max-w-2xl">
                        <SmallImage
                            src={src}
                            alt={alt}
                            cover={cover}
                        />
                        <SubTitle
                            maxWidth="70vw"
                            mdMaxWidth="730px"
                            mdSize="2xl"
                            size="lg"
                            xlSize="lg"
                            xxlSize="lg"
                            xlMaxWidth="730px"
                        >
                            {children}
                        </SubTitle>
                    </div>
    )
}