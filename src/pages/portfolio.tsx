import * as React from "react";
import MainLayout from "../components/main_layout";

const headerText = "Here are some of my previously worked on projects.";

function PortfolioPage() {
    return (
        <MainLayout>
            <div>
                <p>{headerText}</p>
            </div>
        </MainLayout>
    );
}

export default PortfolioPage;
