import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import HoverAnimate from "@/components/HoverAnimate";

function Hero() {
    const splitRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        SplitText.create(splitRef.current, {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 1,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05,
                });
            },
        });
    }, []);
    return (
        <section className="grid grid-cols-1 gap-12 mt-36 md:mt-48 lg:mt-72 lg:grid-cols-3">
            {/* 左側文字 */}
            <p
                ref={splitRef}
                className="col-span-2 text-2xl md:text-3xl lg:text-7xl font-medium leading-snug"
            >
                A collection of <br />
                JS effects <br />
                Made With Gsap
            </p>

            {/* 右側說明 + 按鈕 */}
            <div className="col-span-1 flex flex-col justify-end gap-4">
                <p className="md:text-xl font-medium">
                    Enhance your GSAP skills with a range of 50 unique and
                    well-crafted effects.
                </p>
                <button className="d-button">
                    <HoverAnimate text="Explore collection" as="p" />
                </button>
            </div>
        </section>
    );
}

export default Hero;
