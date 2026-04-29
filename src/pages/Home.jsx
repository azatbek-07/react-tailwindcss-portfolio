import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";

export function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <section className="flex flex-col-reverse md:flex-row justify-around items-center min-h-screen px-4 md:px-10 pt-24 gap-10">


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-center md:text-left"
                >
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-800">
                            {t("home.title")}{" "}
                            <b className="text-indigo-600">{t("home.name")}</b>
                        </h1><br />

                        <p className="max-w-xl text-base md:text-lg text-slate-600 leading-relaxed mx-auto md:mx-0">
                            {t("home.description")}
                        </p><br />

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">

                            <a
                                href="https://t.me/@A_z_a_t_b_e_k"
                                target="_blank"
                                className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 rounded-md 
        hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <FaTelegram /> {t("a.telegram")}
                            </a>

                            <a
                                href="https://github.com/azatbek-07"
                                target="_blank"
                                className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-slate-800 text-slate-800 rounded-md 
        hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <FaGithub /> {t("a.github")}
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className="w-full sm:w-40 h-11 flex items-center justify-center gap-2 border border-emerald-600 text-emerald-600 rounded-md 
        hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                📄 {t("a.cv")}
                            </a>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-60 h-60 md:w-80 md:h-80"
                >
                    <div className="relative">
                        <img
                            className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
                            src="/images/rasmim1.jpg"
                            alt="error"
                        />
                    </div>
                </motion.div>





            </section>
            <Footer />
        </>
    );
}
