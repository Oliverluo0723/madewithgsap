import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLottie } from "lottie-react";
import jj from "@/pages/Home/components/lotties/Scene-1.json";

const options = {
    animationData: jj,
    loop: true,
};

function S3() {
    const containerRef = useRef<HTMLElement>(null);
    const { View } = useLottie(options);
    useGSAP(() => {
        gsap.to(".circle", {
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 1,
                start: "top 80%",
                end: "+=300",
            },
            yPercent: -30,
            scaleY: 1.17,
            duration: 1.8,
            ease: "elastic.inOut",
            stagger: {
                amount: 1.4,
                from: "edges",
            },
        });
    }, []);
    return (
        <section ref={containerRef} className="w-full min-h-svh bg-black/95">
            <div className="w-full flex-center">
                {Array.from({ length: 14 }).map((_, index) => (
                    <div key={index} className="circle"></div>
                ))}
            </div>

            <div className="w-full h-36 flex-center">
                <h2 className="text-white text-3xl lg:text-7xl text-center">
                    Learn how to use <br /> the coolest JS lirbrary
                </h2>
            </div>
            <div>{View}</div>
        </section>
    );
}

export default S3;
