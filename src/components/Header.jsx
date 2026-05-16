import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import LanguageDropdown from "./LanguageDropdown"; // Importni tekshirib oling

export function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white backdrop-blur-lg shadow-sm fixed top-0 left-0 h-16 w-full z-50 border-b border-slate-200">
            <nav className="flex justify-around items-center px-4 md:px-10 h-16 max-w-7xl mx-auto">

                {/* LOGO QISMI (Azatbek Ermalaev uchun) */}
                <Link to="/" className="flex items-center gap-2 group">

                    <div className="flex flex-col leading-none">
                        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-slate-800">

                            Azatbek <span className="text-indigo-600">Ermalaev</span>

                        </h1>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATSIYA */}
                <div className="hidden md:flex gap-10 font-medium text-slate-700">
                    {["home", "about", "contact", "blog"].map((item) => (
                        <Link
                            key={item}
                            className="relative hover:text-indigo-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                            after:w-0 after:h-0.5 after:bg-indigo-600 
                            after:transition-all after:duration-300 hover:after:w-full"
                            to={item === "home" ? "/" : `/${item}`}
                        >
                            {t(`header.${item}`)}
                        </Link>
                    ))}
                </div>

                {/* O'NG TOMON: TIL VA BURGER MENU */}
                <div className="flex items-center gap-4">
                    <LanguageDropdown />

                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>
            </nav>

            {/* MOBIL MENYU */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 py-6 flex flex-col items-center gap-6 shadow-xl animate-in slide-in-from-top duration-300">
                    <Link onClick={() => setIsOpen(false)} className="font-medium text-slate-700 hover:text-indigo-600" to="/">{t("header.home")}</Link>
                    <Link onClick={() => setIsOpen(false)} className="font-medium text-slate-700 hover:text-indigo-600" to="/about">{t("header.about")}</Link>
                    <Link onClick={() => setIsOpen(false)} className="font-medium text-slate-700 hover:text-indigo-600" to="/contact">{t("header.contact")}</Link>
                    <Link onClick={() => setIsOpen(false)} className="font-medium text-slate-700 hover:text-indigo-600" to="/blog">{t("header.blog")}</Link>
                </div>
            )}
        </header>
    );
}