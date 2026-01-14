
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter, LuLinkedin, LuInstagram, LuPhone } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";
import { LiaEnvelope } from "react-icons/lia";
import FooterLinks from "./FooterLinks";
import bg from "../assets/Background.png"

const Footer = () => {
    return (
        <div className="bg-slate-900 w-full h-auto sticky p-4 mt-10">

            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-[80%] md:w-[60%] lg:w-[30%]">
                    <div className="flex shrink-0 items-center">
                        <img
                            src={bg}
                            alt="logo"
                            className="h-8 w-auto mx-5"
                        />
                        <h1 className="font-mono text-white">Credit Jambo</h1>
                    </div>

                    <div className="text-gray-400 text-md mx-5 mt-3">
                        Empowering agents and
                        merchants with secure,
                        efficient financial
                        management tools.
                    </div>

                    <div className="flex space-x-3 px-5 pt-4 ">
                        <div className="bg-slate-400 rounded-lg text-white p-2 h-9">
                            <SlSocialFacebook className="size-5" />
                        </div>
                        <div className="bg-slate-400 rounded-lg text-white p-2 h-9">
                            <LuTwitter className="size-5" />
                        </div>
                        <div className="bg-slate-400 rounded-lg text-white p-2 h-9">
                            <LuLinkedin className="size-5" />
                        </div>
                        <div className="bg-slate-400 rounded-lg p-2 h-9">
                            <LuInstagram className="size-5 text-white" />
                        </div>
                    </div>
                </div>

                <FooterLinks/>

            </div>



            <div className="h-px bg-slate-700 w-[80%] mx-auto mt-12 lg:w-[90%]"></div>

            <div className="p-5 text-center flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:mx-6">
                    <MdCopyright className="size-3 text-gray-400 inline-block mx-2" />
                    <span className="text-md text-gray-400">Credit Jambo. All rights reserved.</span>
                </div>
                <div className="mt-3 flex space-x-3 lg:mt-0 lg:mx-6">
                    <>
                        <LiaEnvelope className="size-5 text-gray-400 inline-block mx-1" />
                        <span className="text-md text-gray-400 mr-4">support@creditjambo.com</span>
                    </>
                    <>
                        <LuPhone className="size-4 text-gray-400 inline-block ml-2" />
                        <span className="text-md text-gray-400">+254 700 000 000</span>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Footer;