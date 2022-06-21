import * as React from "react";
import NavBar from "./navbar";

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
    return (
        // Container
        <div className="min-h-screen bg-bg-patt">
            {/* <NavBar /> */}
            {/* Page component */}
            <div className="text-white">{props.children}</div>
        </div>
    );
}

export default MainLayout;
