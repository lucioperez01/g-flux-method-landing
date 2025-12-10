interface titleProps {
    children: React.ReactNode;
    maxWidth: string;
    size: string;
    mdSize: string;
    xlSize: string;
    xxlMaxWidth: string;
}

export default function Title({children, maxWidth, size, mdSize, xlSize, xxlMaxWidth}: titleProps){

    return (
        <h2 
            className={`bebas text-${size} text-center text-balance max-w-[${maxWidth}] md:text-${mdSize} xl:text-[${xlSize}] xl:text-balance xl:max-w-[${xxlMaxWidth}]`}
            >
            {children}
        </h2>
    )
}