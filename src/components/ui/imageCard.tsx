interface ImageCardProps {
    src: string;
    alt: string;
}



export default function ImageCard ({src, alt}: ImageCardProps) {
    
    return (
            <img src={src} alt={alt} 
            className={`saturate-160 max-w-60 rounded-xl shadow-lg `}
            />
    )
}