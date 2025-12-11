interface SmallImageProps {
    src: string;
    alt: string;
    h: string;
    w?: string;
}


export default function SmallImage({ src, alt, h, w }: SmallImageProps) {
    
    return(
        <div className="flex items-center h-auto justify-center">
            <img 
                src={src}
                alt={alt} 
                className="max-h-40 max-w-200" />
        </div>
    )
}