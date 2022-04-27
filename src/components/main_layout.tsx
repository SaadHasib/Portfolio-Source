import { Link } from "gatsby";
import * as React from "react";

function MainLayout(props: any) {
    return (
        // Container
        <div className="h-screen bg-black">
            {/* Navigation links */}
            <nav
                className="flex gap-x-16 w-full h-16 bg-black text-white text-xl text-center border-b-2 \
            border-b-white font-body font-bold"
            >
                <Link className="inline-block ml-9 mt-2" to="/">
                    <div
                        className="w-[150px] h-[31px] border-b-4 border-b-green-500 \
                    hover:h-[38px] hover:text-2xl hover:text-green-500 transition-all duration-200"
                    >
                        Home
                    </div>
                </Link>
                <Link className="inline-block ml-auto mt-2" to="/blog">
                    <div
                        className="w-[150px] h-[31px] border-b-4 border-b-blue-500 \
                    hover:h-[38px] hover:text-2xl hover:text-blue-500 transition-all duration-200"
                    >
                        Blog
                    </div>
                </Link>
                <Link className="inline-block mt-2" to="/experiments">
                    <div
                        className="w-[150px] h-[31px] border-b-4 border-b-blue-500 \
                    hover:h-[38px] hover:text-2xl hover:text-blue-500 transition-all duration-200"
                    >
                        Experiments
                    </div>
                </Link>
                <Link className="inline-block mr-9 mt-2" to="/portfolio">
                    <div
                        className="w-[150px] h-[31px] border-b-4 border-b-blue-500 \
                    hover:h-[38px] hover:text-2xl hover:text-blue-500 transition-all duration-200"
                    >
                        Portfolio
                    </div>
                </Link>
            </nav>
            {/* Page component */}
            <div className="text-white">{props.children}</div>
        </div>
    );
}

export default MainLayout;
