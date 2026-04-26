import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="bg-white/70 backdrop-blur-lg shadow-sm fixed w-full z-50 border-b border-slate-200">
                <nav className="flex justify-around items-center px-10 h-16 max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide text-slate-800">
                        Azatbek <span className="text-indigo-600">Ermalaev</span>
                    </h1>

                    <div className="text-lg flex gap-20 font-medium text-slate-700">
                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                              after:w-0 after:h-[2px] after:bg-indigo-600 
                              after:transition-all after:duration-300 hover:after:w-full"
                            to="/">Asosiy</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                              after:w-0 after:h-[2px] after:bg-indigo-600 
                              after:transition-all after:duration-300 hover:after:w-full"
                            to="/about">Men haqimda</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                               after:w-0 after:h-[2px] after:bg-indigo-600 
                               after:transition-all after:duration-300 hover:after:w-full"
                            to="/contact">Aloqa</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                after:w-0 after:h-[2px] after:bg-indigo-600 
                                after:transition-all after:duration-300 hover:after:w-full"
                            to="/">Blog</Link>
                    </div>
                </nav>
            </header>


            <section className="flex justify-around items-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-10 pt-24">

                <div className="space-y-6">
                    <h1 className="text-5xl font-bold leading-tight text-slate-800">
                        Salom, men <b className="text-indigo-600">Azatbek</b>
                    </h1>

                    <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
                        Men <b>Samarqand Davlat Universiteti (SamDU) </b>Sun’iy intellekt fakultetida tahsil olaman va Full Stack dasturchi bo‘lishni maqsad qilganman.

                        Dasturlashga qiziqishim orqali men zamonaviy web texnologiyalarni o‘rganib bormoqdaman va turli amaliy loyihalar ustida ishlayman.

                        Mening maqsadim — foydalanuvchiga qulay, tezkor va sifatli web ilovalar yaratish hamda professional dasturchi sifatida rivojlanish.
                    </p>
                </div>

                <div className="relative">
                    <img
                        className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
                        src="/images/rasmim1.jpg"
                        alt="error"
                    />

                    <div className="absolute inset-0 rounded-full bg-indigo-300 blur-3xl opacity-20 -z-10"></div>
                </div>

            </section>
        </>
    )
}