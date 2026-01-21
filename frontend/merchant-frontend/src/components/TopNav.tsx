import bg from "../assets/Background.png"
import { MoonIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics, TbReceiptDollar } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { VscNote } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: "Dashboard", href: "/dashboard", current: true, icon: MdOutlineDashboard },
    { name: "Reports", href: "#", current: false, icon: TbReportAnalytics },
    { name: "Merchants", href: "#", current: false, icon: LuUsers },
    { name: "Transactions", href: "#", current: false, icon: TbReceiptDollar },
    { name: "Acc. Statement", href: "#", current: false, icon: VscNote },
]

export const TopNav = () => {
    const navigate = useNavigate();
    const [expand, setExpand] = useState(false)

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-white w-full z-10 h-16 border-b border-gray-400">
                <div className="relative flex h-16 items-center justify-between mx-4">
                    <div className="flex shrink-0 items-center">
                        <Bars3Icon className="w-6 h-6 lg:hidden cursor-pointer" onClick={() => setExpand(!expand)} />
                        <img
                            src={bg}
                            alt="logo"
                            className="h-8 w-auto mx-5"
                        />
                        <h1 className="font-mono">Credit Jambo</h1>
                    </div>
                    <div className="flex mx-16">
                        <MoonIcon className="h-5 w-5 mt-2 mr-5" />
                        <div className="bg-green-500 rounded-full text-white text-center w-9 h-9 p-2.5 text-md">J</div>
                        <h1 className="hidden lg:block mt-2 ml-5">John Kamau</h1>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>

            {expand && (
                <div className="relative mt-0 border-r border-b shadow-lg w-64 bg-white text-white p-4 lg:hidden">
                    <div className="mt-3">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.name}
                                    className={`mp-3 mb-5 p-3 rounded-lg text-gray-500 cursor-pointer ${item.current && "bg-green-500 text-white"}`}
                                    onClick={() => navigate(item.href)}
                                >
                                    <Icon className={`h-6 w-6 ${item.current ? "text-white" : "text-gray-500"} inline-block mr-3`} />
                                    <h1 className="inline-block text-md">{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}