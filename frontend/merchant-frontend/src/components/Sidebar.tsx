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

export const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed top-16 left-0 bottom-0 w-64 border-r border-gray-400 p-4 bg-white pt-5 hidden lg:block">
            {navigation.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        className={`  mp-3 mb-5 p-3 rounded-lg text-gray-500 ${item.current ? "bg-green-500 text-white" : "hover:bg-green-100 "}`}
                        onClick={() => navigate(item.href)}>
                        <Icon className={`h-6 w-6 ${item.current ? "text-white" : "text-gray-500"} inline-block mr-3`} />
                        <h1 className=" inline-block text-md">{item.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}