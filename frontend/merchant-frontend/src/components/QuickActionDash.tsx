import { CheckCircleIcon, ArrowUpRightIcon, ArrowDownRightIcon, WalletIcon } from "@heroicons/react/24/outline"
export const QuickActions = () =>{
    return(
        <div className="h-auto border border-gray-300 rounded-2xl mx-7 p-6 mt-6">
            <h1 className="text-sm font-medium">Quick Actions</h1>
            <h1 className="text-sm font-light text-gray-400 mt-1">Common tasks at your fingertips</h1>

            <div className="flex flex-col space-y-4 mt-5 md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-row">
                <div className="bg-green-600 text-white rounded-2xl h-auto p-4 cursor-pointer text-center lg:w-[25%]">
                    <CheckCircleIcon className="h-4 w-4 mx-auto mb-2"/>
                    <h1 className="text-sm">Approve Transaction</h1>
                </div>
                <div className="border border-gray-200 rounded-2xl h-auto p-4 cursor-pointer text-center lg:w-[25%]">
                    <ArrowUpRightIcon className="h-4 w-4 mx-auto mb-2"/>
                    <h1 className="text-sm">Withdraw Funds</h1>

                </div>
                <div className="border border-gray-200 rounded-2xl h-20 px-2 py-3 cursor-pointer text-center lg:w-[25%]">
                    <ArrowDownRightIcon className="h-4 w-4 mx-auto mb-2"/>
                    <h1 className="text-sm">Deposit Funds</h1>

                </div>
                <div className="border border-gray-200 rounded-2xl h-20 px-2 py-3 cursor-pointer text-center lg:w-[25%]">
                    <WalletIcon className="h-4 w-4 mx-auto mb-2"/>
                    <h1 className="text-sm">View Statement</h1>
                </div>
            </div>
        </div>
    )
}