// 組件
import Header from "@/layouts/Header";
import Hero from "./components/Hero";
import S2 from "./components/S2";
import S3 from "./components/S3";
import S4 from "./components/S4";

function Home() {
    return (
        <div className="px-6 space-y-12">
            <Header />
            <Hero />
            <S2 />
            <div className="mt-24">
                <S3 />
            </div>
            <S4 />
            <div className="w-full h-svh"></div>
        </div>
    );
}

export default Home;
