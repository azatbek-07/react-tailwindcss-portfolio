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
                              after:w-0 after:h-0.5 after:bg-indigo-600 
                              after:transition-all after:duration-300 hover:after:w-full"
                            to="/">Asosiy</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                              after:w-0 after:h-0.5 after:bg-indigo-600 
                              after:transition-all after:duration-300 hover:after:w-full"
                            to="/about">Men haqimda</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                               after:w-0 after:h-0.5 after:bg-indigo-600 
                               after:transition-all after:duration-300 hover:after:w-full"
                            to="/contact">Aloqa</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                after:w-0 after:h-0.5 after:bg-indigo-600 
                                after:transition-all after:duration-300 hover:after:w-full"
                            to="/">Blog</Link>
                    </div>
                </nav>
            </header>


            <section className="flex justify-around items-center min-h-screen from-slate-50 via-white to-indigo-50 px-10 pt-24">

                <div className="space-y-6">
                    <h1 className="text-5xl font-bold leading-tight text-slate-800">
                        Salom, men <b className="text-indigo-600">Azatbek</b>
                    </h1><br />

                    <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
                        Men <b>Samarqand Davlat Universiteti (SamDU) </b>Sun’iy intellekt fakultetida tahsil olaman va Full Stack dasturchi bo‘lishni maqsad qilganman.

                        Dasturlashga qiziqishim orqali men zamonaviy web texnologiyalarni o‘rganib bormoqdaman va turli amaliy loyihalar ustida ishlayman.

                        Mening maqsadim — foydalanuvchiga qulay, tezkor va sifatli web ilovalar yaratish hamda professional dasturchi sifatida rivojlanish.
                    </p>
                    <br />

                    <div className="flex gap-4 mt-6">

                        {/* Telegram */}
                        <a
                            href="https://t.me/@A_z_a_t_b_e_k"
                            target="_blank"
                            className="w-40 h-11 flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 rounded-md 
                          hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            📩 Telegram
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/azatbek-07"
                            target="_blank"
                            className="w-40 h-11 flex items-center justify-center gap-2 border border-slate-800 text-slate-800 rounded-md 
                            hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            💻 GitHub
                        </a>

                        {/* CV Download */}
                        <a
                            href="/cv.pdf"
                            download
                            className="w-40 h-11 flex items-center justify-center gap-2 border border-emerald-600 text-emerald-600 rounded-md 
        hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            📄 CV Download
                        </a>

                    </div>
                </div>

                <div className="relative">
                    <img
                        className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
                        src="/images/rasmim1.jpg"
                        alt="error"
                    />


                </div>


            </section>

        </>
    )
}