import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";

const headerText =
    "Here is a showcase of a selection of projects I have worked on.";

function PortfolioPage() {
    return (
        <MainLayout>
            <Helmet>
                <title>Saad Hasib | Portfolio</title>
            </Helmet>
            <HeaderSection mainPage="sec" text={headerText} />
            {/* Projects cards section container */}
            <div></div>
        </MainLayout>
    );
}

export default PortfolioPage;
