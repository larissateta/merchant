import bg from "../assets/Background.png"
import cont from "../assets/Container.jpg"
import { EnvelopeIcon, LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const Login = () => {
    return (
        <div className="flex flex-col mx-8 md:mx-30 lg:flex-row lg:h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center py-50 lg:py-0 ">
                <div className="w-full max-w-md">
                    <div className="flex items-center lg:mx-30 mx-20 md:mx-30">
                        <img src={bg} alt="logo" className="h-8 w-8" />
                        <h1 className="text-lg mx-2 text-nowrap">Credit Jambo</h1>
                    </div>

                    <div className="mt-7">
                        <h1 className="text-sm">Welcome</h1>
                        <h1 className="text-sm text-gray-400">Sign up to start managing your agent dashboard.</h1>
                    </div>

                    <div className="w-full">
                        <div className="mt-8">
                            <h1 className="text-sm mb-2">Email</h1>
                            <div className="relative">
                                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="agent@creditjambo.com"
                                    className="rounded-md h-auto p-3 w-full bg-gray-200 pl-10"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <h1 className="text-sm mb-2">Password</h1>
                            <div className="relative">
                                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="............"
                                    className="rounded-md h-auto p-3 w-full bg-gray-200 pl-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:mx-30 mx-22 md:mx-33">
                        <button className="w-45 bg-green-500 text-white p-3 rounded-2xl mt-10 cursor-pointer">
                            Get Started
                        </button>
                    </div>

                    <div className="text-center">
                        <h1 className="text-xs text-gray-400 mt-5">Secure login powered by Credit Jambo</h1>
                    </div>
                </div>
            </div>


            <div className="hidden lg:block lg:w-1/2 relative">

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
        </div>
    )
}

export default Login;