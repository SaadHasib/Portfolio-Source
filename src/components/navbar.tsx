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
                    absolute top-0 z-50 md:relative
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
                    className="ml-3 md:ml-9"
                    to="/"
                    activeClassName="text-green-500"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-green-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-green-500 md:border-b-green-500
                        px-3 md:px-3 md:hover:px-5
                        my-3 md:pb-0.5"
                    >
                        Home
                    </div>
                </Link>
                <Link
                    className="ml-3 md:ml-auto"
                    to="/blog"
                    activeClassName="text-blue-500"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-blue-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-blue-500 md:border-b-blue-500
                        px-3 md:px-3 md:hover:px-5
                        my-3 md:pb-0.5"
                    >
                        Blog
                    </div>
                </Link>
                <Link
                    className="ml-3 md:ml-0
                        mr-0 md:mr-9"
                    to="/portfolio"
                    activeClassName="text-blue-500"
                >
                    <div
                        className="transition-all duration-200
                        md:hover:text-blue-500
                        border-l-4 md:border-b-4 md:border-l-0
                        border-l-blue-500 md:border-b-blue-500
                        px-3 md:px-3 md:hover:px-5
                        my-3 md:pb-0.5"
                    >
                        Portfolio
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;
