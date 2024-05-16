import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header(props) {
    const [hideMobileMenu, setHideMobileMenu] = useState(true)

    const handleToggle = (e) => {
        setHideMobileMenu(!hideMobileMenu)
    }

    return (
        <header className="bg-red-500 border-0">
            <nav className="mx-auto flex max-w-5xl items-center justify-between p-2 lg:px-2 border-0" aria-label="Global">
                <div className="flex lg:flex-1 border-0">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <img className="h-20 w-auto rounded-lg" src={props.Logo} alt="F1 News Logo" />
                        <span className="ml-2 text-lg text-white font-bold">F1 News</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" onClick={handleToggle} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 border-0">
                    <NavLink to="/" className="text-sm font-semibold leading-6 text-white hover:text-gray-700">Home</NavLink>
                    <NavLink to="/drivers" className="text-sm font-semibold leading-6 text-white hover:text-gray-700">Drivers</NavLink>
                    <NavLink to="/calendar" className="text-sm font-semibold leading-6 text-white hover:text-gray-700">Races</NavLink>
                    <NavLink to="/about" className="text-sm font-semibold leading-6 text-white hover:text-gray-700">About</NavLink>
                    <NavLink to="/create" className="text-sm font-semibold leading-6 text-white hover:text-gray-700"><button>Create Article</button></NavLink>
                </div>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end border-0">
                    <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-700">Log in <span aria-hidden="true">&rarr;</span></a>
                </div> */}
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className={`${hideMobileMenu && 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-500 px-2 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">F1 News</span>
                            <img className="h-8 w-auto" src={props.Logo} alt="" />
                        </Link>
                        <button type="button" onClick={handleToggle} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/" onClick={handleToggle} className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-700 border-b">News</Link>
                                <Link to="/drivers" onClick={handleToggle} className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-700 border-b">Drivers</Link>
                                <Link to="/calendar" onClick={handleToggle} className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-700 border-b">Races</Link>
                                <Link to="/about" onClick={handleToggle} className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-700 border-b">About</Link>
                                <Link to="/create" onClick={handleToggle} className="-mx-3 block rounded-sm px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-700 border-b">Create Article</Link>
                            </div>
                            {/* <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>



    );
}

export default Header;
