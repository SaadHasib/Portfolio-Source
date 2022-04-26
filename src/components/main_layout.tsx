import { Link } from "gatsby";
import * as React from "react";

function MainLayout(props: any) {
    return (
        <div className="h-screen bg-black">
            <nav
                className="flex gap-x-16 w-full h-16 bg-black text-white text-xl text-center border-b-2 \
            border-b-white font-body font-bold"
            >
                <Link className="inline-block ml-9 mt-2" to="/">
                    <div className="w-36 h-2/3 border-b-4 border-b-green-500">
                        Home
                    </div>
                </Link>
                <Link className="inline-block ml-auto mt-2" to="/blog">
                    <div className="w-36 h-2/3 border-b-4 border-b-blue-500">
                        Blog
                    </div>
                </Link>
                <Link className="inline-block mt-2" to="/experiments">
                    <div className="w-36 h-2/3 border-b-4 border-b-blue-500">
                        Experiments
                    </div>
                </Link>
                <Link className="inline-block mr-9 mt-2" to="/portfolio">
                    <div className="w-36 h-2/3 border-b-4 border-b-blue-500">
                        Portfolio
                    </div>
                </Link>
            </nav>
            <div className="text-white">{props.children}</div>
        </div>
    );
}

export default MainLayout;
