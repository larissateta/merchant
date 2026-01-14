import { CheckCircleIcon, UsersIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const ServicesSection = () => {
    return (
        <div className="lg:mx-auto lg:pt-12 lg:pb-10 lg:px-10 lg:bg-gray-50 mb-5 lg:rounded flex flex-col space-y-8 mt-10 lg:mt-0">
            <div className="mx-auto">
                <div className="w-26 h-10 bg-green-100 rounded-2xl uppercase text-green-400 text-center pt-3 mx-20">
                    SERVICES
                </div>
            </div>

            <div className="mx-auto">
                <div className="text-center mx-10">
                    <h1 className="text-5xl capitalize ">Everything you need to succeed</h1>
                    <p className="text-gray-400 text-md mt-6">
                        Powerful tools designed
                        to help agents and
                        merchants manage their
                        financial operations
                        efficiently.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex flex-col space-y-5 lg:flex-row lg:space-x-5 mb-9">
                <div className="w-sm h-70 md:h-50 border border-gray-200 rounded-2xl p-8 md:w-2xl lg:w-sm">
                    <div className="w-13 h-13 p-3 rounded-xl bg-blue-100">
                        <CheckCircleIcon className="h-7 w-7 text-green-500" />
                    </div>

                    <div className="w-55 md:w-full">
                        <h1 className="text-lg mt-3">Transaction Management</h1>
                        <h4 className="text-md text-gray-400">
                            Approve and manage
                            customer transactions
                            in real-time with
                            advanced security
                            features and instant
                            notifications.
                        </h4>
                    </div>

                </div>
                <div className="w-sm border border-gray-200 rounded-2xl p-8 h-70 md:h-50 md:w-2xl lg:w-sm">
                    <div className="w-13 h-13 p-3 rounded-xl bg-blue-100">
                        <UsersIcon className="h-7 w-7 text-blue-500" />
                    </div>

                    <div className="w-55 md:w-full">
                        <h1 className="text-lg mt-3">Merchant Network</h1>

                        <h4 className="text-md text-gray-400">
                            Manage your merchant
                            network efficiently
                            with comprehensive
                            tools for onboarding,
                            monitoring, and
                            support.
                        </h4>
                    </div>

                </div>
                <div className="w-sm  border border-gray-200 rounded-2xl p-8 h-70 md:h-50 md:w-2xl lg:w-sm">
                    <div className="w-13 h-13 p-3 rounded-xl bg-purple-100">
                        <ArrowTrendingUpIcon className="h-7 w-7 text-purple-500" />
                    </div>

                    <div className="w-55 md:w-full">
                        <h1 className="text-lg mt-3">Commission Tracking</h1>
                        <h4 className="text-md text-gray-400">
                            Track your earnings
                            and commissions with
                            detailed reports and
                            analytics to grow your
                            business.
                        </h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesSection