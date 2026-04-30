import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageDropdown() {
  const { i18n: i18next } = useTranslation(); // 🔥 MUHIM
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
    { code: "uz", name: "O'zbekcha", flag: "https://flagcdn.com/uz.svg" },
    { code: "qar", name: "Qaraqalpaqsha", flag: "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Karakalpakstan.svg" },
  ];

  // 🔥 endi shu ishlaydi
  const current = languages.find((l) => l.code === i18next.language);

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLang = (code) => {
    i18next.changeLanguage(code); // 🔥 shu ham
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl 
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-md "
      >
        <img src={current?.flag} className="w-5 h-5" />
        <span>{current?.name}</span>

        <motion.span animate={{ rotate: open ? 180 : 0 }}>
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute mt-2 w-56 bg-white white:bg-white-900  rounded-xl shadow"
          >
            {languages.map((lang) => {
              const active = i18next.language === lang.code;

              return (
                <div
                  key={lang.code}
                  onClick={() => changeLang(lang.code)}
                  className={`flex justify-between px-4 py-3 cursor-pointer ${
                    active ? "text-indigo-500" : ""
                  }`}
                >
                  <div className="flex gap-2">
                    <img src={lang.flag} className="w-5 h-4" />
                    {lang.name}
                  </div>

                  {active && (
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}