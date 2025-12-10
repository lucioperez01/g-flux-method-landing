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

export default function SubTitle({children, maxWidth, mdMaxWidth, xlMaxWidth, size, mdSize, xlSize, xxlSize}: subtitleProps) {
return(
    <p className={`inter text-${size} font-semibold max-w-[${maxWidth}] text-balance text-center md:text-${mdSize} md:w-[${mdMaxWidth}] xl:text-${xlSize} xl:text-justify xl:max-w-[${xlMaxWidth}]`}
    >{children}
    </p>
)
}