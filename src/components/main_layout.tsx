import * as React from "react";
import { mainLayoutProps } from "../types";
import NavBar from "./navbar";

function MainLayout(props: mainLayoutProps) {
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
