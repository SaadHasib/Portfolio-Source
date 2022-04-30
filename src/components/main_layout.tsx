import * as React from "react";
import NavBar from "./navbar";

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout(props: MainLayoutProps) {
    return (
        // Container
        <div className="h-screen bg-pat2-bg bg-repeat">
            <NavBar />
            {/* Page component */}
            <div className="text-white">{props.children}</div>
        </div>
    );
}

export default MainLayout;
