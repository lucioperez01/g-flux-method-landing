interface titleProps {
    children: React.ReactNode;
    maxWidth: string;
    size: string;
    mdSize: string;
    xlSize: string;
    xxlMaxWidth: string;
    
}

export default function Title({children, size, mdSize }: titleProps){

    return (
        <h2 
            className={`bebas text-${size} text-center text-balance max-w-[80vw] md:text-${mdSize} xl:text-[4rem] xl:text-balance xl:max-w-xl 2xl-max-w-2xl`}
            >
            {children}
        </h2>
    )
}