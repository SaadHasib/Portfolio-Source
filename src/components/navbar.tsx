import * as React from "react";
import { Link } from "gatsby";

function NavBar() {
    // Navbar show/hide styles
    const navShown = "hidden h-0";
    const navHidden = "flex h-full";

    // Navbar toggle state
    const [navVisibility, setNavVisibility] = React.useState(false);

    function showNav() {
        setNavVisibility(true);
    }

    function hideNav() {
        setNavVisibility(false);
    }

    return (
        <div>
            {/* Mobile menu show icon svg */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                version="1.1"
                id="menu_ico"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden
                    absolute top-0 md:relative"
                onClick={showNav}
            >
                <defs id="defs2" />
                <g id="layer1">
                    <path
                        className="menu_line"
                        d="m 3.5,4.925713 h 25"
                        id="menu_line_1"
                    />
                    <path
                        className="menu_line"
                        d="m 3.5,12.259043 h 25"
                        id="menu_line_2"
                    />
                    <path
                        className="menu_line"
                        d="m 3.5,19.592379 h 25"
                        id="menu_line_3"
                    />
                    <path
                        className="menu_line"
                        d="m 3.5,26.925713 h 25"
                        id="menu_line_4"
                    />
                </g>
            </svg>
            <nav
                className={`gap-x-16 bg-black text-white font-body w-full
                    border-b-0 md:border-b-2 md:border-b-white
                    absolute top-0 md:relative
                    pt-2 md:pt-0
                    flex-col md:flex-row
                    text-base md:text-lg lg:text-xl
                    font-normal md:font-bold
                    text-justify md:text-center
                    md:flex md:h-16
                    ${navVisibility ? navHidden : navShown}`}
            >
                {/* Mobile menu hide icon svg */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    version="1.1"
                    id="menu_ico"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block md:hidden"
                    onClick={hideNav}
                >
                    <defs id="defs2" />
                    <g id="layer1">
                        <path
                            className="menu_line"
                            d="M 7.161165,7.1611651 24.838835,24.838835"
                            id="menu_close_line_1"
                        />
                        <path
                            className="menu_line"
                            d="M 7.161165,24.838835 24.838835,7.161165"
                            id="menu_close_line_2"
                        />
                    </g>
                </svg>
                {/* Navigation links */}
                <Link
                    className="inline-block mt-3
                        ml-3 md:ml-9"
                    to="/"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-green-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-green-500 md:border-b-green-500
                        h-[25px] md:h-[28px] lg:h-[31px]
                        w-[75px] md:w-[120px] lg:w-[150px]
                        px-3 md:px-0
                        my-2 md:my-0
                        md:hover:h-[33px] lg:hover:h-[38px]
                        md:hover:text-xl lg:hover:text-2xl"
                    >
                        Home
                    </div>
                </Link>
                <Link
                    className="inline-block mt-3
                        ml-3 md:ml-auto"
                    to="/blog"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-blue-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-blue-500 md:border-b-blue-500
                        h-[25px] md:h-[28px] lg:h-[31px]
                        w-[75px] md:w-[120px] lg:w-[150px]
                        px-3 md:px-0
                        my-2 md:my-0
                        md:hover:h-[33px] lg:hover:h-[38px]
                        md:hover:text-xl lg:hover:text-2xl"
                    >
                        Blog
                    </div>
                </Link>
                <Link
                    className="inline-block mt-3
                        ml-3 md:ml-0"
                    to="/experiments"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-blue-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-blue-500 md:border-b-blue-500
                        h-[25px] md:h-[28px] lg:h-[31px]
                        w-[75px] md:w-[120px] lg:w-[150px]
                        px-3 md:px-0
                        my-2 md:my-0
                        md:hover:h-[33px] lg:hover:h-[38px]
                        md:hover:text-xl lg:hover:text-2xl"
                    >
                        Experiments
                    </div>
                </Link>
                <Link
                    className="inline-block mt-3
                        ml-3 md:ml-0
                        mr-0 md:mr-9"
                    to="/portfolio"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-blue-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-blue-500 md:border-b-blue-500
                        h-[25px] md:h-[28px] lg:h-[31px]
                        w-[75px] md:w-[120px] lg:w-[150px]
                        px-3 md:px-0
                        my-2 md:my-0
                        md:hover:h-[33px] lg:hover:h-[38px]
                        md:hover:text-xl lg:hover:text-2xl"
                    >
                        Portfolio
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;
