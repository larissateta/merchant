import bg from "../assets/Background.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginImgSection } from "../components/loginImgSection";

const VerificationPage = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 2

    const navigate = useNavigate();
    const progressPercentage = (currentStep / totalSteps) * 100
    return (
        <div className="flex flex-col mx-8 md:mx-30 lg:flex-row lg:h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center py-50 lg:py-0 ">
                <div className="w-full max-w-md">
                    <div 
                    className="flex items-center lg:mx-30 mx-20 md:mx-30 cursor-pointer" 
                    onClick={() => navigate("/")}
                    >
                        <img src={bg} alt="logo" className="h-8 w-8" />
                        <h1 className="text-lg mx-2 text-nowrap">Credit Jambo</h1>
                    </div>

                    <div className="mt-7">
                        <h1 className="text-lg text-gray-600">KYC Verification</h1>
                        <h1 className="text-md text-gray-400">Complete Your Verification To Access Your Dashboard.</h1>
                    </div>


                    <div className="mt-5">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>

                        <div className="text-gray-600">
                            Step {currentStep} of {totalSteps}
                        </div>

                        <div className="mt-7">

                            {currentStep === 1 ? (
                                <div>
                                    <div className="space-y-5">
                                        <div>
                                            <h1 className="text-md font-black mb-2">Full Name *</h1>
                                            <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                placeholder="John Kamau"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-md font-black mb-2">National ID Number *</h1>
                                            <input
                                                type="text"
                                                name="nationalId"
                                                id="nationalId"
                                                placeholder="12345678"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-md font-black mb-2">Phone Number *</h1>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                placeholder="+250 788 222 111"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>

                                        <div>
                                            <h1 className="text-md font-black mb-2">Address *</h1>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                placeholder="Rwanda, Kigali"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <button
                                            disabled={currentStep == 1}
                                            className="border border-gray-400 text-gray-400 cursor-not-allowed w-[50%] px-4 py-2 rounded-lg"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => setCurrentStep(2)}
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg w-[50%] hover:bg-green-600"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>

                                    <div className="space-y-5">
                                        <div>
                                            <h1 className="text-md font-black mb-2">Password *</h1>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="........"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <h1 className="text-md font-black mb-2">Confirm Password *</h1>
                                            <input
                                                type="cpassword"
                                                name="cpassword"
                                                id="cpassword"
                                                placeholder="........"
                                                className="w-full p-3 h-auto bg-gray-200 rounded-lg"
                                            />
                                        </div>
                                    </div>


                                    <div className="flex gap-4 mt-8">
                                        <button
                                            className="border border-gray-400 text-gray-400 cursor-pointer w-[50%] px-4 py-2 rounded-lg hover:text-green-500 hover:border-green-500"
                                            onClick={() => setCurrentStep(1)}
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => navigate('/dashboard')}
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg w-[50%] hover:bg-green-600"
                                        >
                                            Next
                                        </button>
                                    </div>

                                </div>
                            )}

                            { }


                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
                <LoginImgSection/>
            </div>
        </div>
    )
}

export default VerificationPage;