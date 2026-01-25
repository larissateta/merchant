import { QuickActions } from "../components/QuickActionDash"
import { RecentTransactions } from "../components/RecentTrans"
import { Sidebar } from "../components/Sidebar"
import { TopNav } from "../components/TopNav"
import { TransactionSummary } from "../components/TransactionSum"
import { WalletOverview } from "../components/WalletOverview"

export const Dashboard = () => {
    return (
        <div className="lg:ml-64 lg:mr-5 mb-6">
            <TopNav />
            <Sidebar />

            <div className="px-6 pt-6 pb-2">
                <h1 className="text-lg">Dashboard</h1>
            </div>
            <h1 className="text-sm font-light text-gray-500 ml-6 lg:mb-6 lg:text-xs">Welcome back! Here's your wallet overview</h1>

            <WalletOverview />
            <QuickActions />

            <div className="flex flex-col lg:flex-row lg:w-full">
                <TransactionSummary />
                <RecentTransactions />
            </div>

        </div>
    )
}
