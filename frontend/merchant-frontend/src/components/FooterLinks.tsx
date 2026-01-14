const FooterLinks = () => {
    return (
        <div>
            <div className="mx-5 flex flex-col lg:flex-row lg:space-x-40 w-[60%]">
                <div className="mt-5 flex flex-col space-y-3 lg:w-[25%]">
                    <h2 className="text-white text-md ">Product</h2>
                    <h2 className="text-gray-400 text-md ">Features</h2>
                    <h2 className="text-gray-400 text-md ">Pricing</h2>
                    <h2 className="text-gray-400 text-md ">Security</h2>
                    <h2 className="text-gray-400 text-md ">Updates</h2>
                </div>
                <div className="mt-5 flex flex-col space-y-3 lg:w-[25%]">
                    <h2 className="text-white text-md ">Company</h2>
                    <h2 className="text-gray-400 text-md ">About Us</h2>
                    <h2 className="text-gray-400 text-md ">Careers</h2>
                    <h2 className="text-gray-400 text-md ">Blog</h2>
                    <h2 className="text-gray-400 text-md ">Press</h2>
                </div>
                <div className="mt-5 flex flex-col space-y-3 lg:w-[25%]">
                    <h2 className="text-white text-md">Resources</h2>
                    <h2 className="text-gray-400 text-md ">Documentation</h2>
                    <h2 className="text-gray-400 text-md">Help Center</h2>
                    <h2 className="text-gray-400 text-md">Community</h2>
                    <h2 className="text-gray-400 text-md">Contact</h2>
                </div>
                <div className="mt-5 flex flex-col space-y-3 lg:w-[25%]">
                    <h2 className="text-white text-md">Legal</h2>
                    <h2 className="text-gray-400 text-md">Privacy Policy</h2>
                    <h2 className="text-gray-400 text-md">Terms of Service</h2>
                    <h2 className="text-gray-400 text-md">Cookie Policy</h2>
                    <h2 className="text-gray-400 text-md">Compliance</h2>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks;