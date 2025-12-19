interface subtitleProps {
    children: React.ReactNode;
    maxWidth: string;
    mdMaxWidth: string;
    xlMaxWidth: string;
    size: string;
    mdSize: string;
    xlSize: string;
    xxlSize: string;
}

export default function SubTitle({children, mdMaxWidth, size, mdSize, xlSize}: subtitleProps) {
return(
    <p className={`inter text-${size} font-semibold max-w-[80vw] text-balance text-center md:text-${mdSize} md:w-${mdMaxWidth} xl:text-${xlSize} xl:text-justify xl:max-w-xl`}
    >{children}
    </p>
)
}