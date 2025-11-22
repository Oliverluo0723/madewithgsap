import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";
import { useLottie } from "lottie-react";
import jj from "@/pages/Home/components/lotties/4-_-3.json";
import { CornerDownRight } from "lucide-react";
import HoverAnimate from "@/components/HoverAnimate";

const options = {
    animationData: jj,
    loop: true,
};
function S2() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    const infoRef = useRef<HTMLParagraphElement>(null);
    const CornerDownRightRef = useRef<SVGSVGElement>(null);

    useGSAP(() => {
        gsap.from(".box", {
            scrollTrigger: ".box",
            x: 500,
            duration: 0.7,
            ease: "back.inOut",
            autoAlpha: 0,
        });

        gsap.to(".box", {
            scrollTrigger: {
                trigger: ".box",
                start: "center center",
                end: "+=800",
                pin: true,
                scrub: 1,
            },
            scale: 0.4,
            duration: 4,
        });

        SplitText.create(infoRef.current, {
            type: "lines, chars",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.lines, {
                    scrollTrigger: {
                        trigger: infoRef.current,
                        scrub: 1,
                        start: "top 80%",
                        end: "top 20%",
                    },
                    duration: 1,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05,
                    ease: "power2.out",
                });
            },
        });

        const paths = CornerDownRightRef.current?.querySelectorAll("path");
        if (paths) {
            gsap.from(paths, {
                scrollTrigger: {
                    trigger: CornerDownRightRef.current,
                    start: "top 60%",
                },
                drawSVG: 0,
                stagger: 0.2,
            });
        }
    }, []);
    const { View } = useLottie(options);
    return (
        <>
            <div className="box">{View}</div>
            <p
                ref={infoRef}
                className="text-3xl lg:text-4xl text-center font-medium leading-relaxed"
            >
                歡迎來到我們的 Explore Collection!
                這裡展示了我們精心挑選的創意作品,
                從設計到細節，每一件作品都充滿了故事與靈感。
                您可以透過互動瀏覽，發現每個設計背後的理念與工藝，
                並深入了解每個系列的特色與亮點。
                無論是藝術創作還是實用設計，我們希望每位訪客都能找到自己的靈感來源，
                並享受探索的樂趣。
            </p>

            <div className="w-full h-1/2 mt-96 flex-center gap-4">
                <CornerDownRight ref={CornerDownRightRef} size={48} />
                <HoverAnimate
                    text="  Explore Collection"
                    as="h6"
                    className="text-6xl dm-mono underline cursor-pointer"
                />
            </div>
        </>
    );
}

export default S2;
