import * as React from "react";
import NavBar from "./navbar";

type MainLayoutProps = {
    children: JSX.Element;
};

function MainLayout(props: MainLayoutProps) {
    return (
        // Container
        <div className="h-screen bg-black">
            <NavBar />
            {/* Page component */}
            <div className="text-white">{props.children}</div>
        </div>
    );
}

export default MainLayout;
