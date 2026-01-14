import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import bg from "../assets/Background.png"

const navigation = [
    { name: "Features", href: "#", current: true },
    { name: "Services", href: "#", current: false },
    { name: "User Flow", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },

]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div>
            <div className="mx-auto bg-white fixed w-full z-10">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex shrink-0 items-center">
                        <img
                            src={bg}
                            alt="logo"
                            className="h-8 w-auto mx-5"
                        />
                        <h1 className="font-mono">Credit Jambo</h1>
                    </div>

                    <div className="hidden lg:flex flex-row space-x-80">
                        <div className="flex space-x-4 lg:w-[90%] ">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'text-black' : 'text-[#16A34A]',
                                        'font-mono px-3 py-2 text-xs whitespace-nowrap font-medium hover:text-black cursor-pointer'
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className=" lg:w-[10%] lg:mx-10">
                            <button className="lg:w-20 cursor-pointer h-auto p-2 rounded-lg hover:bg-green-500 hover:text-white" onClick={() => window.location.href = '/login'}>
                                Log in
                            </button>
                        </div>
                        <div className=" lg:w-[10%] lg:mx-5">
                            <button className="lg:w-30 cursor-pointer h-auto p-2 rounded-lg bg-green-500 text-white">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {expanded && (
                        <div className="absolute pt-10 pb-5 px-3 bg-white rounded-b-md border-l border-b border-gray-300 shadow-lg md:w-[25%] w-[40%] right-0 top-0">
                            <div className="flex flex-col space-y-2 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <div className="mb-3">
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'text-black' : 'text-[#16A34A]',
                                                'font-mono px-3 py-2 text-xs font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        <div className="bg-gray-200 h-px mt-3"></div>
                                    </div>

                                ))}

                                <div className=" lg:w-[10%] lg:mx-10">
                                    <button className="lg:w-20 cursor-pointer h-auto p-2 rounded-lg hover:bg-green-500 hover:text-white">
                                        Log in
                                    </button>
                                </div>
                                <div className=" lg:w-[10%] lg:mx-5">
                                    <button className="lg:w-30 cursor-pointer h-auto p-2 rounded-lg bg-green-500 text-white">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className=" absolute inset-y-0 right-0 flex items-center lg:hidden">
                        <div className="px-3">
                            <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                                <Bars3Icon
                                    aria-hidden='true'
                                    className={`h-5 w-5 mx-3 mt-1 ${expanded ? "hidden" : "block"}`}
                                />
                                <XMarkIcon className={`h-6 w-6 ${expanded ? "block" : "hidden"}`} />
                            </button>

                        </div>
                    </div>
                </div>
                <div className="h-px bg-gray-300"></div>

            </div>
        </div>
    );
}

export default Navbar;