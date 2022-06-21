import * as React from "react";
import NavBar from "./navbar";

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
    return (
        // Container
        <div className="min-h-screen bg-bg-patt text-white">
            {/* <NavBar /> */}
            {/* Page component */}
            {props.children}
        </div>
    );
}

export default MainLayout;
