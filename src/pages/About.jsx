import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase   } from "react-icons/fa";
import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export function About() {
    const { t } = useTranslation(); 
    return (
        <>
            <Header />

            <section className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-10 md:gap-20 px-6">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl text-center md:text-left"
                >
                    <div className="max-w-xl text-center md:text-left">
                        <div className="text-lg md:text-xl leading-relaxed">
                            <h1 className="text-2xl md:text-5xl font-bold mb-4">{t("about-me.title")}</h1><br />

                            <p>
                                {t("about-me.description")}
                            </p><br />

                            <div className="flex gap-20">
                                <div className="flex items-center max-w-30 gap-2 text-sm">
                                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                                    <p>{t("about-me.p.location")}</p>
                                </div>
                                <div className="flex items-center max-w-50 gap-2 text-sm">
                                    <GraduationCap className="w-8 h-8 text-red-500" />
                                    <p>{t("about-me.p.talaba")}</p>
                                </div>
                                <div className="flex items-center max-w-50 gap-2 text-sm">
                                    <FaBriefcase className="w-6 h-6 text-2xl text-red-500" />
                                    <p>{t("about-me.p.tajriba")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-60 h-60 md:w-80 md:h-80"
                >
                    <img src="/images/rasm2.jpg" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                </motion.div>




            </section>

            <Footer/>

        </>

    );
}
