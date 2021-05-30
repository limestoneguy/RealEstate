function Navbar(){
    return (
        <nav className="container mx-auto flex gap-1 items-center py-2 px-3 md:px-0 text-gray-500">
            <div className="logo text-black"><h2 className="font-bold text-2xl cursor-pointer py-2">Logo</h2></div>
            <ul className="flex mx-auto gap-20 md:gap-x-14 sm: gap-x-10">
                <p className="cursor-pointer font-bold text-sm">Home</p>
                <p className="cursor-pointer font-bold text-sm">About</p>
                <p className="cursor-pointer font-bold text-sm">Service</p>
                <p className="cursor-pointer font-bold text-sm">Blog</p>
            </ul>

            <button className="bg-green-400 rounded-md px-8 py-3 text-white text-opacity-80 text-sm">Contact</button>
        </nav>
    );
}

export default Navbar;