import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">

            <div className="text-center">

                <div className="flex justify-center mb-6">
                    <div className="bg-red-500/20 p-5 rounded-full border border-red-500">
                        <TriangleAlert size={60} className="text-red-500" />
                    </div>
                </div>

                <h1 className="text-9xl font-extrabold text-white tracking-widest drop-shadow-lg">
                    404
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-5">
                    Sahifa topilmadi
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
                    Siz qidirayotgan sahifa mavjud emas, o‘chirib yuborilgan
                    yoki noto‘g‘ri link orqali kirilgan bo‘lishi mumkin.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/"
                        className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 duration-300 shadow-2xl"
                    >
                        Bosh sahifa
                    </Link>

                    <Link
                        to="/contact"
                        className="px-8 py-4 rounded-2xl border border-gray-600 text-white hover:bg-white hover:text-black duration-300"
                    >
                        Bog‘lanish
                    </Link>

                </div>

            </div>

        </div>
    );
}