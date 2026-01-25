export const RecentTransactions = () => {
    return (
        <div className="h-auto border border-gray-300 rounded-2xl mx-7 pl-5 pr-3 pt-6 mt-6 pb-5 lg:w-[50%]">
            <h1 className="text-sm font-medium">Recent Transactions</h1>
            <h1 className="text-sm font-light text-gray-400 mt-1">Latest customer activities</h1>

            <div className="flex justify-between mt-5 space-x-2">
                <div className="w-[75%]">
                    <div className="flex justify-between">
                        <h1>Mary Wanjiru</h1>
                        <h1>RWF 5,000</h1>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <h1>Deposit</h1>
                        <h1>2 hours ago</h1>
                    </div>
                </div>
                <div className="mx-3 p-2 rounded-3xl bg-green-200 text-green-700 md:w-[20%] w-[25%] text-center">
                    <h1>completed</h1>
                </div>
            </div>

            <div className="h-px mx-auto bg-gray-200 mt-5"></div>

            <div className="flex justify-between mt-5 space-x-2">
                <div className="w-[75%]">
                    <div className="flex justify-between">
                        <h1>Peter Omondi</h1>
                        <h1>RWF 4,500</h1>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <h1>Deposit</h1>
                        <h1>4 hours ago</h1>
                    </div>
                </div>
                <div className="mx-3 p-2 rounded-3xl bg-orange-200 text-orange-700 w-[25%] md:w-[20%] text-center">
                    <h1>pending</h1>
                </div>
            </div>
            <div className="h-px mx-auto bg-gray-200 mt-5"></div>

            <div className="flex justify-between mt-5 space-x-2">
                <div className="w-[75%]">
                    <div className="flex justify-between">
                        <h1>Jane Akinyi</h1>
                        <h1>RWF 7,000</h1>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <h1>Deposit</h1>
                        <h1>5 hours ago</h1>
                    </div>
                </div>
                <div className="mx-3 p-2 rounded-3xl bg-green-200 text-green-700 w-[25%] md:w-[20%] text-center">
                    <h1>completed</h1>
                </div>
            </div>
            <div className="h-px mx-auto bg-gray-200 mt-5"></div>

            <div className="flex justify-between mt-5 space-x-2">
                <div className="w-[75%]">
                    <div className="flex justify-between">
                        <h1>David Mwangi</h1>
                        <h1>RWF 5,000</h1>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <h1>Deposit</h1>
                        <h1>6 hours ago</h1>
                    </div>
                </div>
                <div className="mx-3 p-2 rounded-3xl bg-orange-200 text-orange-700 w-[25%] md:w-[20%] text-center">
                    <h1>pending</h1>
                </div>
            </div>
        </div>
    )
}