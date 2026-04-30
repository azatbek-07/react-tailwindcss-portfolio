import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-router-dom";
import  LanguageDropdown  from "../components/LanguageDropdown";

export function Header() {
    const { t } = useTranslation();
    return (
        <>
            <header className="bg-white/70 backdrop-blur-lg shadow-sm fixed top-0 left-0  h-16 w-full z-50 border-b border-slate-200">
                <nav className="flex justify-between md:justify-around items-center px-4 md:px-10 h-16 max-w-7xl mx-auto">

                    <h1 className="text-xl md:text-2xl font-bold tracking-wide text-slate-800">
                        Azatbek <span className="text-indigo-600">Ermalaev</span>
                    </h1>

                    <div className="text-sm md:text-lg flex gap-6 md:gap-20 font-medium text-slate-700">
                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-0.5 after:bg-indigo-600 
        after:transition-all after:duration-300 hover:after:w-full"
                            to="/">{t("header.home")}</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-0.5 after:bg-indigo-600 
        after:transition-all after:duration-300 hover:after:w-full"
                            to="/about">{t("header.about")}</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-0.5 after:bg-indigo-600 
        after:transition-all after:duration-300 hover:after:w-full"
                            to="/contact">{t("header.contact")}</Link>

                        <Link className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-0.5 after:bg-indigo-600 
        after:transition-all after:duration-300 hover:after:w-full"
                            to="/blog">{t("header.blog")}</Link>
                    </div>
                    <div>

                        <LanguageDropdown />
                    </div>
                </nav>


            </header>




        </>
    )
}