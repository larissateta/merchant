import { WalletIcon, ClockIcon, ArrowDownRightIcon, ArrowUpRightIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export const WalletOverview = () =>{
    return(
        <div className="flex flex-col space-y-4 lg:flex-row w-full">
            <div className="border border-gray-200 rounded-2xl p-5 h-35 mx-5 lg:w-[25%]">
                <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500 font-light">Total Balance</h1>
                    <WalletIcon className="h-5 w-5 text-green-600"/>
                </div>
                <h1 className="text-lg text-gray-700 mt-6">KES 234,500</h1>
                <div className="flex">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-600 inline-block"/>
                    <h1 className="text-[10px] text-green-600"> +12.5% from last month</h1>
                </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5 h-35 mx-5 lg:w-[25%]">
                <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500 font-light">Pending Approvals</h1>
                    <ClockIcon className="h-5 w-5 text-orange-400"/>
                </div>
                <h1 className="text-lg text-gray-700 mt-6">12</h1>
                <div className="flex">
                    <h1 className="text-[10px] text-gray-400">Requires your attention</h1>
                </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5 h-35 mx-5 lg:w-[25%]">
                <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500 font-light">Total Deposits</h1>
                    <ArrowDownRightIcon className="h-4 w-4 text-blue-400"/>
                </div>
                <h1 className="text-lg text-gray-700 mt-6">KES 89,200</h1>
                <div className="flex">
                    <h1 className="text-[10px] text-gray-400">This week</h1>
                </div>

            </div>
            <div className="border border-gray-200 rounded-2xl p-5 h-35 mx-5 lg:w-[25%]">
                <div className="flex justify-between">
                    <h1 className="text-sm text-gray-500 font-light">Total Withdrawals</h1>
                    <ArrowUpRightIcon className="h-4 w-4 text-purple-400"/>
                </div>
                <h1 className="text-lg text-gray-700 mt-6">KES 56,800</h1>
                <div className="flex">
                    <h1 className="text-[10px] text-gray-400">This week</h1>
                </div>
            </div>
        </div>
    )
};