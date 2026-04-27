import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";

export function Home() {
    return (
        <>
            <Header />
            <section className="flex flex-col-reverse md:flex-row justify-around items-center min-h-screen px-4 md:px-10 pt-24 gap-10">

                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-800">
                        Salom, men <b className="text-indigo-600">Azatbek</b>
                    </h1>

                    <p className="max-w-xl text-base md:text-lg text-slate-600 leading-relaxed mx-auto md:mx-0">
                        Men <b>Samarqand Davlat Universiteti (SamDU)</b> Sun’iy intellekt fakultetida tahsil olaman va Full Stack dasturchi bo‘lishni maqsad qilganman.

                        Dasturlashga qiziqishim orqali men zamonaviy web texnologiyalarni o‘rganib bormoqdaman va turli amaliy loyihalar ustida ishlayman.

                        Mening maqsadim — foydalanuvchiga qulay, tezkor va sifatli web ilovalar yaratish hamda professional dasturchi sifatida rivojlanish.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">

                        <a
                            href="https://t.me/@A_z_a_t_b_e_k"
                            target="_blank"
                            className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 rounded-md 
        hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            <FaTelegram /> Telegram
                        </a>

                        <a
                            href="https://github.com/azatbek-07"
                            target="_blank"
                            className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-slate-800 text-slate-800 rounded-md 
        hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            <FaGithub /> GitHub
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-emerald-600 text-emerald-600 rounded-md 
        hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            📄 CV Download
                        </a>

                    </div>
                </div>

                <div className="relative">
                    <img
                        className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
                        src="/images/rasmim1.jpg"
                        alt="error"
                    />
                </div>

            </section>
            <Footer />
        </>
    );
}
