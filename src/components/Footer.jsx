import { FaTelegram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export function Footer() {
    return (
        <>
            <footer className="bg-gray-900 flex justify-around">
                <div className="text-white max-w-100">
                    <h1>Ermalaev Azatbek</h1>
                    <p className="text-gray-500">Toza, zamonaviy kod va dizayn orqali g'oyalaringizni hayotga tatbiq etaman.</p>
                    <br />

                    <div className="flex gap-4 text-2xl text-gray-300">
                        <a href="https://t.me/@A_z_a_t_b_e_k"><FaTelegram className="hover:text-blue-500 cursor-pointer" /></a>
                        <a href="https://github.com/azatbek-07"><FaGithub className="hover:text-white cursor-pointer" /></a>
                    </div>

                </div>

                <div>
                    <ul>
                        <li>
                            <span className="text-white">Aloqa</span>
                        </li>

                        <li className="text-gray-500">
                            
                        </li>

                        <li className="text-gray-500">
                            Men haqimda
                        </li>

                        <li className="text-gray-500">
                            Aloqa
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <span className="text-white">Sahifalar</span>
                        </li>

                        <li className="text-gray-500">
                           <MdEmail/> <a href="aermalaev07@gmail.com">aermalaev07@gmail.com</a>
                        </li>

                        <li className="text-gray-500">
                            Men haqimda
                        </li>

                        <li className="text-gray-500">
                            Aloqa
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
