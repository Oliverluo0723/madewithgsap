// 組件
import Header from "@/layouts/Header";
import Hero from "./components/Hero";
import S2 from "./components/S2";

function Home() {
    return (
        <div className="px-6">
            <Header />
            <Hero />
            <div className="mt-4">
                <S2 />
            </div>
            <div className="w-full h-svh"></div>
        </div>
    );
}

export default Home;
