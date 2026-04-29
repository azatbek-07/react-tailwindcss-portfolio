import { FaTelegram, FaGithub, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
export function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="h-80  bg-gray-900 flex flex-col md:flex-row justify-around items-start md:items-center px-6 md:px-10 py-10 gap-10">

                <div className="text-white max-w-md flex gap-8">
                    <div>
                        <h1>Ermalaev Azatbek</h1><br />
                        <p className="text-gray-500">
                            {t("footer.description")}
                        </p><br />

                        <div className="flex gap-4 text-2xl text-gray-300 mt-4">
                            <a href="https://t.me/@A_z_a_t_b_e_k"><FaTelegram /></a>
                            <a href="https://github.com/azatbek-07"><FaGithub /></a>
                            <a href="https://instagram.com/ermalaev_azatbek"><FaInstagram className="text-pink-500" /></a>
                        </div><br />

                        <p className="text-gray-500 text-sm mt-6">
                            {t("footer.2026")}
                        </p>
                    </div>
                </div>

                <div>
                    <ul>
                        <li><span className="text-white">{t("footer.royxat1.sahifa")}</span></li><br />
                        <li className="text-gray-500 mt-2">{t("footer.royxat1.home")}</li><br />

                        <li className="text-gray-500 mt-3">{t("footer.royxat1.about")}</li><br />
                        <li className="text-gray-500 mt-2">{t("footer.royxat1.xizmat")}</li><br />
                        <li className="text-gray-500 mt-2">{t("footer.royxat1.portfel")}</li>
                        
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><span className="text-white">{t("footer.royxat2.aloqa")}</span></li><br />

                        <li className="flex items-center gap-4 text-gray-400 mt-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                                <MdEmail className="text-red-500 text-xl" />
                            </div>
                            <a href="mailto:aermalaev07@gmail.com" className="hover:text-white">
                                {t("footer.royxat2.email")}
                            </a>
                        </li><br />

                        <li className="flex items-center gap-4 text-gray-400 mt-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                                <FaPhone className="text-red-500 text-xl" />
                            </div>
                            <a href="tel:+998913712210" className="hover:text-white">
                                {t("footer.royxat2.tel")}
                            </a>
                        </li><br />

                        <li className="flex items-center gap-4 text-gray-400 mt-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800">
                                <FaMapMarkerAlt className="text-red-500 text-xl" />
                            </div>
                            <span>{t("footer.royxat2.location")}</span>
                        </li>
                    </ul>
                </div>

            </footer>

        </>
    )
}
