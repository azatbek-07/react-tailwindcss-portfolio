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

                <div className="border w-165 h-100 px-3 flex justify-center">
                    <div className="w-150 ">
                        <h1 className="text-2xl font-bold">Menga xabar yuboring</h1><br />
                        <form action="" className="">
                            <label htmlFor="name">Ismingiz*</label><br />
                            <input className="
                            border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-10" type="text" id="name" placeholder="To'liq ismingizni kiriting" /><br /><br />

                            <label htmlFor="email">Elektron pochta manzili *</label><br />
                            <input className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-10" type="email" id="email" placeholder="Sizning-pochtangiz@misol.uz" /><br /><br />

                            <label htmlFor="mavzu">Mavzu</label><br />
                            <input className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full   h-10" type="text" id="mavzu" placeholder="Bu nima haqida?" /><br /><br />

                            <label htmlFor="xabar">Xabar*</label><br />
                            <textarea className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-10 " type="text-area" id="xabar" placeholder="Menga loyihangiz haqida so'zlab bering..." />

                        </form>
                    </div>

                </div>

                <div className="border w-165 h-100 px-3 flex justify-center">
                    <div className="border w-165 h-100 px-3 flex justify-center">
                        <div className="w-150 ">
                            <h1 className="text-2xl font-bold">Aloqaga chiqing</h1>
                        </div>

                    </div>


                </div>

            </section>



        </>
    )
}