interface highlightProps {
    highlightText: string;
    isOrange: boolean;
    isAnimated: boolean;
}

export default function HighLight({highlightText, isOrange=true, isAnimated=false}: highlightProps) {
    let color;
    let animation;

    if (isOrange) {
        color = "#F5C542";
    } else {
        color = "#de0914";
    }

    if (isAnimated) {
        animation = 'animate-pulse'
    } else {
        animation = 'animate-none'
    }

    return(
        <span 
        className={`text-[${color}] ${animation} `}
        >{highlightText}</span>
    )
}