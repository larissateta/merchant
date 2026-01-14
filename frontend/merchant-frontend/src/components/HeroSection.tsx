import { CheckCircleIcon } from "@heroicons/react/24/outline"
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:mb-20">

            <div className="lg:w-[50%] md:mt-10">
                <div className="bg-blue-100 w-sm h-12 mx-auto rounded-3xl p-4 lg:mx-10 md:mx-10">
                    <div className="flex space-x-4">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-1"></div>
                        <div>
                            <h1 className="text-sm text-emerald-500">
                                Trusted by 10,000+ agents & Merchants
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mx-12 mt-8">
                    <h1 className="text-6xl">
                        Empower Your Financial Services
                    </h1>
                </div>
                <div className="mx-12 mt-8">
                    <h3 className="text-lg text-slate-500 font-light">
                        Seamlessly manage customer
                        wallets, approve
                        transactions, and track
                        commissions with Credit
                        Jambo's all-in-one agent
                        platform.
                    </h3>
                </div>

                <div className=" flex flex-col space-y-5 mt-8 md:mx-5 lg:flex-row md:flex-row">
                    <div className="mx-auto lg:mx-12 md:mx-5">
                        <button className="bg-green-400 w-80 h-12 rounded-xl text-white lg:w-45 md:w-45">
                            <span className="mx-4">Start For Free</span>
                            <ArrowRightIcon className="inline-block text-white h-4 w-4 mr-2"/>
                        </button>
                    </div>
                    <div className="mx-auto lg:mx-0 md:mx-0">
                        <button className="border-gray-200 border w-80 h-12 rounded-xl lg:w-45 md:w-45">
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="h-px bg-gray-300 w-sm mx-auto mt-12 lg:w-2xl md:w-[90%]"></div>

                <div className="flex space-x-5 mx-9 mt-8 mb-3">
                    <div>
                        <h1 className="text-2xl lg:text-3xl">50k+</h1>
                        <h4 className="text-gray-400">Active Users</h4>
                    </div>
                    <div>
                        <h1 className="text-2xl lg:text-3xl">1M+</h1>
                        <h4 className="text-gray-400">Transactions</h4>
                    </div>
                    <div>
                        <h1 className="text-2xl lg:text-3xl">99.9%</h1>
                        <h4 className="text-gray-400">Uptime</h4>
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <div className="relative mx-4 mt-8 md:mx-8 lg:mt-10">
                    <div className="h-auto">
                        <img src="src/assets/landing.png" alt="landing-image" className="lg:w-full rounded-xl"/>
                    </div>

                    <div className=" absolute -bottom-8 left-3 bg-white w-60 h-18 flex space-x-3 pt-3 px-3 rounded-xl shadow-2xl border border-gray-200">
                        <div className="w-10 h-10 p-2 rounded-xl bg-blue-100">
                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Transactions Today</p>
                            <p className="text-lg font-medium">+2, 847</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection;