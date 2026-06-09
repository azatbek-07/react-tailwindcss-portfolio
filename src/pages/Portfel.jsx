import { motion } from "framer-motion";

export function Portfel() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center items-center z-0 lg:order-last"
            >
                <section className="flex flex-col md:flex-row justify-center items-center min-h-80 gap-10 md:gap-20 px-4 sm:px-6 py-10">
                    <div className="w-full md:w-180 text-center px-4">
                        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">Loyihalar galereyasi</h1>
                        <p className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed px-2"> Mening tajribam va qilgan ishlarim. Barcha loyihalar responsive, zamonaviy va foydalanuvchilarga qulay tarzda yaratilgan.</p>
                    </div>
                </section></motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center items-center z-0 lg:order-last"
            >

                <section className="px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-6 md:gap-8">
                        <div className="w-full sm:w-96 md:w-100 lg:w-110 rounded-2xl bg-white hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                            <div>
                                <img src="/images/rasm2.png" alt="" className="w-full object-cover rounded-t-2xl h-48 sm:h-52 md:h-56" />
                            </div>
                            <div className="flex justify-center p-4 sm:p-5">
                                <div className="w-100 space-y-2">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Portfelim azatbek.uz</h1><br />
                                    <p className="text-gray-600 text-sm sm:text-base">Shaxsiy portfolio saytim. Loyihalarim, tajribam va kontakt ma'lumotlarim joylashgan.</p><br />

                                    <div className="flex flex-wrap gap-2 my-4">
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🏷️ Portfolio
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎨 Design
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            💻 React
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎯 Tailwind CSS
                                        </span>
                                    </div><br />

                                    <div className="flex justify-center w-full cursor-pointer border-indigo-600 hover:bg-indigo-500 border-2 rounded-2xl">
                                        <a
                                            href="https://github.com/azatbek-07/react-tailwindcss-portfolio"
                                            target="_blank"
                                            className="w-full text-center py-2 text-indigo-600 hover:text-white"
                                        >
                                            GitHub
                                        </a>
                                    </div><br />

                                </div>
                            </div>
                        </div>


                        <div className="w-full sm:w-96 md:w-100 lg:w-110 rounded-2xl bg-white hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                            <div>
                                <img src="/images/rasm5.png" alt="" className="w-full object-cover h-48 sm:h-52 md:h-56 rounded-t-2xl" />
                            </div>
                            <div className="flex justify-center p-4 sm:p-5">
                                <div className="w-100 space-y-2">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Login Register</h1><br />
                                    <p className="text-gray-600 text-sm sm:text-base">React va Node.js dan foydalanib ishlangan. Foydalanuvchi ro'yxatdan o'tadi va tizimga kiradi.</p><br />

                                    <div className="flex flex-wrap gap-2 my-4">
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🟢 Node.js
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎨 Design
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            💻 React
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎯 Tailwind CSS
                                        </span>
                                    </div><br />

                                    <div className="flex justify-center w-full cursor-pointer border-indigo-600 hover:bg-indigo-500 border-2 rounded-2xl">
                                        <a
                                            href="https://github.com/azatbek-07/react-tailwindcss-portfolio"
                                            target="_blank"
                                            className="w-full text-center py-2 text-indigo-600 hover:text-white"
                                        >
                                            GitHub
                                        </a>
                                    </div><br />
                                </div>
                            </div>
                        </div>


                        <div className="w-full sm:w-96 md:w-100 lg:w-110 rounded-2xl bg-white hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 border border-gray-200">
                            <div>
                                <img src="/images/rasm4.png" alt="" className="w-full object-cover rounded-t-2xl h-48 sm:h-52 md:h-56" />
                            </div>
                            <div className="flex justify-center p-4 sm:p-5">
                                <div className="w-100 space-y-2">
                                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900">SamDu oshxonasi</h1><br />
                                    <p className="text-gray-600 text-sm sm:text-base">SamDU oshxonasi menyusi va buyurtmalarni boshqarish uchun web ilova.</p><br />

                                    <div className="flex flex-wrap gap-2 my-4">
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎨 Design
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            💻 React
                                        </span>
                                        <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-indigo-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                            🎯 Tailwind CSS
                                        </span>
                                    </div><br />

                                    <div className="flex justify-center w-full cursor-pointer border-indigo-600 hover:bg-indigo-500 border-2 rounded-2xl">
                                        <a
                                            href="https://github.com/azatbek-07/react-tailwindcss-portfolio"
                                            target="_blank"
                                            className="w-full text-center py-2 text-indigo-600 hover:text-white"
                                        >
                                            GitHub
                                        </a>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section></motion.div>

        </>
    )
}