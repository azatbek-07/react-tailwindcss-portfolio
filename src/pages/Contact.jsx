import { Header } from "../components/Header";

export function Contact() {
    return (
        <>
            <Header />

                <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-6 ">
                    <div className="max-w-250 text-center ">
                        <div>
                            <h1 className="font-bold text-6xl">Keling, birga ishlaymiz</h1><br />
                            <h1 className="text-2xl">Agar sizda loyiha, hamkorlik yoki takliflar bo‘lsa, men bilan bemalol bog‘lanishingiz mumkin. Yangi g‘oyalar va imkoniyatlarga ochiqman.</h1>
                        </div>

                    </div>
                </section>

                <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-6 ">

                    <div className="border">

                    </div>

                    <div className="border">

                    </div>

                </section>


           
        </>
    )
}