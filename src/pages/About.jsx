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
           

         <section className="flex flex-col lg:flex-row justify-center items-center min-h-[90vh] gap-10 lg:gap-20 px-6 py-20 max-w-7xl mx-auto">
    
    {/* IMAGE - Mobil qurilmalarda birinchi chiqadi */}
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative order-first lg:order-last"
    >
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
            {/* Orqa fon bezagi (ixtiyoriy) */}
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
            
            <img
                src="/images/rasmim3.jpg"
                alt="Azatbek"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white"
            />
        </div>
    </motion.div>

    {/* TEXT - Mobil qurilmalarda rasmning tagida chiqadi */}
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left"
    >
        <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                {t("about-me.title")}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {t("about-me.description")}
            </p>

            {/* INFO CARDS - Ikonkalar blokini chiroyli qilish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="bg-red-100 p-2 rounded-lg text-red-500">
                        <FaMapMarkerAlt size={20} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{t("about-me.p.location")}</p>
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="bg-red-100 p-2 rounded-lg text-red-500">
                        <GraduationCap size={24} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{t("about-me.p.talaba")}</p>
                </div>

                <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100 sm:col-span-2 lg:col-span-1">
                    <div className="bg-red-100 p-2 rounded-lg text-red-500">
                        <FaBriefcase size={20} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{t("about-me.p.tajriba")}</p>
                </div>

            </div>
        </div>
    </motion.div>

</section>

          

        </>

    );
}
