import { FaTelegram, FaGithub, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export function Footer() {
    return (
        <>
            <footer className="h-80 bg-gray-900 flex justify-around items-center">
                <div className="text-white max-w-100 flex gap-8">
                    
                    <div>
                        <h1>Ermalaev Azatbek</h1>
                    <p className="text-gray-500">Toza, zamonaviy kod va dizayn orqali g'oyalaringizni hayotga tatbiq etaman.</p>
                    <br />

                    <div className="flex gap-4 text-2xl text-gray-300">
                        <a href="https://t.me/@A_z_a_t_b_e_k"><FaTelegram className="hover:text-blue-500 cursor-pointer" /></a>
                        <a href="https://github.com/azatbek-07"><FaGithub className="hover:text-white cursor-pointer" /></a>
                        <a href="https://instagram.com/ermalaev_azatbek"><FaInstagram className="text-pink-500  hover:scale-110 transition" /></a>
                    </div><br /><br />
                    <p className="text-center text-gray-500 text-sm">
                        © 2026 Azatbek dev. Barcha huquqlar himoyalangan.
                    </p>
                    </div>

                </div>

                <div className="mb-3">
                    <ul>
                        <li>
                            <span className="text-white">Sahifalar</span>
                        </li><br />

                        <li className="text-gray-500">
                            Men haqimda
                        </li><br />

                       

                        <li className="text-gray-500">
                            Xizmatlar
                        </li><br />

                        <li className="text-gray-500">
                            Portfel
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <span className="text-white">Aloqa</span>
                        </li><br />

                        <li className="flex items-center gap-4 text-gray-400">
                            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-800">
                                <MdEmail className="text-red-500 text-xl" />
                            </div>
                            <a href="mailto:aermalaev07@gmail.com" className="hover:text-white">
                                aermalaev07@gmail.com
                            </a>
                        </li><br />

                        <li className="flex items-center gap-4 text-gray-400">
                            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-800">
                                <FaPhone className="text-red-500 text-xl" />
                            </div>
                            <a href="tel:+998913712210" className="hover:text-white">
                                +998 91 371 22 10
                            </a>
                        </li><br />

                        <li className="flex items-center gap-4 text-gray-400">
                            <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-800">
                                <FaMapMarkerAlt className="text-red-500 text-xl" />
                            </div>
                            <span>Samarqand, Uzbekistan</span>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
