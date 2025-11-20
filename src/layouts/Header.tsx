import HoverAnimate from "@/components/HoverAnimate";

function Header() {
    return (
        <>
            <header>
                <HoverAnimate text="Made With Gsap" className="font-medium" />
                <nav className="hidden md:block">
                    <ul className="flex-between gap-4">
                        <HoverAnimate text="Collection" as="li" />
                        <HoverAnimate text="Pricing" as="li" />
                        <HoverAnimate text="FAQ" as="li" />
                    </ul>
                </nav>

                <div className="hidden md:flex justify-center items-center gap-6">
                    <HoverAnimate text="Sign IN" className="text-sm" />
                    <button className="d-button">
                        <HoverAnimate
                            text="START LEARING NOW"
                            className="text-sm"
                        />
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
