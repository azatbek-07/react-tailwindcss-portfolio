import { FaTelegram, FaGithub, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
export function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="bg-gray-900 flex flex-col lg:flex-row justify-around items-start lg:items-center px-4 sm:px-6 md:px-10 py-10 gap-10 overflow-hidden">

    {/* LEFT */}
    <div className="text-white w-full max-w-md">

        <div>

            <h1 className="text-2xl font-bold">
                Ermalaev Azatbek
            </h1>

            <br />

            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {t("footer.description")}
            </p>

            <br />

            {/* SOCIAL */}
            <div className="flex gap-4 text-2xl text-gray-300 mt-4 flex-wrap">

                <a href="https://t.me/A_z_a_t_b_e_k">
                    <FaTelegram />
                </a>

                <a href="https://github.com/azatbek-07">
                    <FaGithub />
                </a>

                <a href="https://instagram.com/ermalaev_azatbek">
                    <FaInstagram className="text-pink-500" />
                </a>

            </div>

            <br />

            <p className="text-gray-500 text-sm mt-6">
                {t("footer.2026")}
            </p>

        </div>

    </div>

    {/* MENU */}
    <div className="w-full sm:w-auto">

        <ul>

            <li>
                <span className="text-white text-lg font-semibold">
                    {t("footer.royxat1.sahifa")}
                </span>
            </li>

            <br />

            <li className="text-gray-500 mt-2 hover:text-white transition">
                {t("footer.royxat1.home")}
            </li>

            <br />

            <li className="text-gray-500 mt-2 hover:text-white transition">
                {t("footer.royxat1.about")}
            </li>

            <br />

            <li className="text-gray-500 mt-2 hover:text-white transition">
                {t("footer.royxat1.xizmat")}
            </li>

            <br />

            <li className="text-gray-500 mt-2 hover:text-white transition">
                {t("footer.royxat1.portfel")}
            </li>

        </ul>

    </div>

    {/* CONTACT */}
    <div className="w-full max-w-md">

        <ul>

            <li>
                <span className="text-white text-lg font-semibold">
                    {t("footer.royxat2.aloqa")}
                </span>
            </li>

            <br />

            {/* EMAIL */}
            <li className="flex items-start sm:items-center gap-4 text-gray-400 mt-3">

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 shrink-0">
                    <MdEmail className="text-red-500 text-xl" />
                </div>

                <a
                    href="mailto:aermalaev07@gmail.com"
                    className="hover:text-white break-all transition"
                >
                    {t("footer.royxat2.email")}
                </a>

            </li>

            <br />

            {/* PHONE */}
            <li className="flex items-start sm:items-center gap-4 text-gray-400 mt-3">

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 shrink-0">
                    <FaPhone className="text-red-500 text-xl" />
                </div>

                <a
                    href="tel:+998913712210"
                    className="hover:text-white transition"
                >
                    {t("footer.royxat2.tel")}
                </a>

            </li>

            <br />

            {/* LOCATION */}
            <li className="flex items-start sm:items-center gap-4 text-gray-400 mt-3">

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 shrink-0">
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                </div>

                <span className="leading-relaxed">
                    {t("footer.royxat2.location")}
                </span>

            </li>

        </ul>

    </div>

</footer>

        </>
    )
}
