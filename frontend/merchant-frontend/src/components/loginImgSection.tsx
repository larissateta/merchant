import cont from "../assets/Container.jpg"
import { ShieldCheckIcon } from "@heroicons/react/24/outline"

export const LoginImgSection = () =>{
    return(
        <div className="h-full">
                <img
                    src={cont}
                    alt="container"
                    className="w-11/12 h-11/12 object-cover mt-7 rounded-2xl"
                />

                <div className="absolute inset-0 bg-black/50 w-11/12 h-11/12 mt-7 rounded-2xl"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-15 pt-96">
                    <div className="flex items-center">
                        <ShieldCheckIcon className="h-8 w-8 text-white mr-3" />
                        <span className="text-lg text-white">Secure & Verified</span>
                    </div>

                    <div className="text-white mt-6 max-w-lg">
                        <h1 className="text-3xl font-bold">Your Security is Our Priority</h1>
                        <h1 className="text-lg mt-4">Complete KYC verification to ensure secure transactions and protect your account.</h1>
                    </div>
                </div>
        </div>
    )
}
