import { Link } from "gatsby";
import * as React from "react";

function MainLayout(props: any) {
    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/experiments">Experiments</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </nav>
            </div>
            <div>{props.children}</div>
        </div>
    );
}

export default MainLayout;
