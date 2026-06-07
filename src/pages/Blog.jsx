import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { motion } from "framer-motion";

export function Blog() {
    const { t } = useTranslation();
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center items-center z-0 lg:order-last"
            >
                <div className="min-h-screen">
                    <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-4 sm:px-6 py-10">
                        <div className="max-w-3xl text-center space-y-6">
                            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">{t("blog.title")}</h1>
                            <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">{t("blog.description")}</p>
                        </div>
                    </section>

                    <div className="flex justify-center px-4 sm:px-6">
                        <div className="flex gap-8 flex-col md:flex-row max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl">

                            {/* Rasm */}
                            <img
                                src="images/rasm2.png"
                                alt="Project"
                                className="w-full h-64 md:w-1/2 object-cover"
                            />

                            {/* Content */}
                            <div className="p-5 md:p-6 md:w-1/2 ">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                    <span>📅</span>
                                    <span>07.06.2026</span>
                                </div><br />

                                <h2 className="mb-2 text-xl md:text-2xl font-bold">
                                    {t("blog.card.title")}
                                </h2><br />

                                <p className="mb-4 text-gray-600 text-sm md:text-base">
                                    {t("blog.card.description")}
                                </p><br />

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        🏷️ Portfolio
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        🎨 Design
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        💻 React
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        🎯 Tailwind
                                    </span>
                                </div><br />

                                <button className="rounded-lg bg-blue-800 px-4 py-2 text-white transition hover:bg-blue-500 w-full">
                                    Batafsil
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}