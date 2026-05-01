import { Header } from "../components/Header";
import { MdEmail } from "react-icons/md";
import { Send } from "lucide-react";
import { FaTelegram, FaGithub, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import i18n from "i18next";


export function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <Header />

            <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-6">
                <div className="max-w-3xl text-center space-y-6">
                    <h1 className="font-bold text-5xl md:text-6xl leading-tight">
                        {t("contact.title")}
                    </h1>

                    <h1 className="text-lg md:text-2xl text-gray-600 leading-relaxed">
                        {t("contact.subtitle")}
                    </h1>
                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-6 ">

                <div className=" w-full md:w-500px px-6 flex justify-center rounded-2xl 
                shadow-lg hover:shadow-2xl transition duration-300 bg-white">
                    <div className="w-150 ">
                        <h1 className="text-2xl font-bold">{t("contact.formTitle")}</h1><br />
                        <form action="" className="">
                            <label htmlFor="name">{t("contact.name")}</label><br />
                            <input className="
                            border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-10" type="text" id="name" placeholder="To'liq ismingizni kiriting" /><br /><br />

                            <label htmlFor="email">{t("contact.email")}</label><br />
                            <input className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-10" type="email" id="email" placeholder="Sizning-pochtangiz@misol.uz" /><br /><br />

                            <label htmlFor="mavzu">{t("contact.subject")}</label><br />
                            <input className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full   h-10" type="text" id="mavzu" placeholder="Bu nima haqida?" /><br /><br />

                            <label htmlFor="xabar">{t("contact.message")}</label><br />
                            <textarea className="border transition duration-200
                            hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 rounded-md w-full h-30 " type="text-area" id="xabar" placeholder="Menga loyihangiz haqida so'zlab bering..." />

                            <div>

                                <button className="justify-center flex w-full h-11 items-center gap-2 
bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 
rounded-xl hover:scale-[1.02] hover:shadow-lg transition duration-300">
                                    <Send size={18} />
                                    {t("contact.send")}

                                </button><br />
                            </div>

                        </form>
                    </div>

                </div>

                <div className="shadow-xl rounded-2xl w-165  px-3 flex justify-center">
                    <div className=" w-165  px-3 flex justify-center ">
                        <div className="w-150 ">
                            <h1 className="text-2xl font-bold">{t("info.contactMe")}</h1>
                            <p>{t("info.description")}</p><br />

                            <div className="flex items-center gap-5">
                                <div className="bg-indigo-100 p-2 rounded-xl">
                                    <MdEmail className="text-indigo-500 text-4xl " />
                                </div>
                                <div>
                                    <p className="font-bold">{t("info.email")}</p>
                                    <a href="aermalaev07@gmail.com">aermalaev07@gmail.com</a>
                                </div>
                            </div><br />



                            <div className="flex items-center gap-5">
                                <div className="bg-indigo-100 p-2 rounded-xl">
                                    <FaPhone className="text-indigo-500 text-4xl" />
                                </div>
                                <div>
                                    <p className="font-bold">{t("info.phone")}</p>
                                    <a href="tel:+998913712210" className="">
                                        +99 891 371-22-10
                                    </a>
                                </div>
                            </div><br />

                            <div className="flex items-center gap-5">
                                <div className="bg-indigo-100 p-2 rounded-xl">
                                    <FaMapMarkerAlt className="text-indigo-500 text-4xl" />
                                </div>
                                <div>
                                    <p className="font-bold">{t("info.location")}</p>
                                    <p>Samarqand, O'zbekiston</p>
                                </div>
                            </div><br />
                            <p className="font-bold">{t("info.follow")}</p>
                            <div className="flex items-center gap-10 text-4xl">

                                <a href="https://t.me/@A_z_a_t_b_e_k"><FaTelegram /></a>
                                <a href="https://github.com/azatbek-07"><FaGithub /></a>
                                <a href="https://instagram.com/ermalaev_azatbek"><FaInstagram className="text-pink-500" /></a>

                            </div><br />

                            <div className="flex justify-center bg-indigo-100 shadow-xl rounded-2xl ">
                                <div className="max-w-140">
                                    <p>{t("info.guaranteeTitle")}</p>
                                    <p>{t("info.guaranteeText")}</p><br />
                                </div>
                            </div><br />
                        </div>

                    </div>


                </div>

            </section><br /><br />

            <div className="flex justify-center px-6 py-10">
                <div className="flex justify-center w-full max-w-5xl bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl p-10 shadow-2xl">

                    <div className="text-center max-w-150 flex flex-col items-center">

                        {/* ANIMATED ICON */}
                        <div className="relative flex justify-center items-center mb-6">

                            {/* glow ring */}
                            <div className="absolute w-16 h-16 bg-red-400 rounded-full opacity-30 animate-ping"></div>

                            {/* soft glow */}
                            <div className="absolute w-10 h-10 bg-red-500 rounded-full blur-xl opacity-40"></div>

                            {/* icon */}
                            <FaMapMarkerAlt className="text-red-500 text-4xl relative z-10 animate-pulse" />

                        </div><br />

                        {/* TITLE */}
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t("location.title")}
                        </h1><br />

                        {/* DESCRIPTION */}
                        <p className="text-indigo-50 leading-relaxed text-center">
                            {t("location.description")}

                        </p><br />

                    </div>

                </div>
            </div><br /><br />


            <Footer />



        </>
    )
}