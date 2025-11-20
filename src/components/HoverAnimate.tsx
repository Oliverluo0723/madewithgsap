import { useRef } from "react";
import type { ElementType } from "react";
import gsap from "gsap";

interface HoverAnimateProps {
    text: string;
    className?: string;
    as?: ElementType;
}

function HoverAnimate({
    text,
    className = "",
    as: Component = "h1",
}: HoverAnimateProps) {
    const topRef = useRef<HTMLElement>(null);
    const bottomRef = useRef<HTMLElement>(null);

    const handleMouseEnter = () => {
        gsap.to([topRef.current, bottomRef.current], {
            yPercent: 100,
            duration: 0.4,
            ease: "power3.inOut",
        });
    };

    const handleMouseLeave = () => {
        gsap.to([topRef.current, bottomRef.current], {
            yPercent: 0,
            duration: 0.4,
            ease: "power3.inOut",
        });
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-fit h-fit relative cursor-pointer overflow-hidden leading-loose ${className}`}
        >
            <Component ref={topRef}>{text}</Component>
            <Component ref={bottomRef} className="absolute -top-full left-0">
                {text}
            </Component>
        </div>
    );
}

export default HoverAnimate;
