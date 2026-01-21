import bg from "../assets/Background.png"
import cont from "../assets/Container.jpg"
import { EnvelopeIcon, LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { LoginImgSection } from "../components/loginImgSection";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col mx-8 md:mx-30 lg:flex-row lg:h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center py-50 lg:py-0 ">
                <div className="w-full max-w-md">
                    <div className="flex items-center lg:mx-30 mx-20 md:mx-30 cursor-pointer" onClick={() => navigate("/")}>
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
                        <button className="w-45 bg-green-500 text-white p-3 rounded-2xl mt-10 cursor-pointer" onClick={() => navigate('/dashboard')}>
                            Sign In
                        </button>
                    </div>

                    <div className="text-center">
                        <h1 className="text-xs text-gray-400 mt-5">Secure login powered by Credit Jambo</h1>
                    </div>
                </div>
            </div>


            <div className="hidden lg:block lg:w-1/2 relative">
                <LoginImgSection/>
            </div>
        </div>
    )
}

export default Login;