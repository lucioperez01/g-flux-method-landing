interface ImageCardProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    mdWidth: string;
    xlWidth: string;

}

export default function ImageCard ({src, alt, width, height, mdWidth, xlWidth}: ImageCardProps) {
    return (
            <img src={src} alt={alt} 
            className={`saturate-160 max-w-[${width}] rounded-lg shadow-lg md:max-w-[${mdWidth}] xl:max-w-[${xlWidth}]`}
            />
    )
}