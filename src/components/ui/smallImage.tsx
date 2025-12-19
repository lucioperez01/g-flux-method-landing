interface SmallImageProps {
    src: string;
    alt: string;
    cover?: boolean;
}


export default function SmallImage({ src, alt, cover }: SmallImageProps) {
    return (
        <div className="flex items-center justify-center w-72 h-20">
        <img
            src={src}
            alt={alt}
            className={`w-full h-full rounded-2xl shadow-2xl ${
            cover ? "object-cover" : "object-contain"
            }`}
        />
        </div>
    );
}