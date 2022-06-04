import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";

const headerText =
    "Here is a showcase of a selection of projects I have worked on.";

function PortfolioPage() {
    return (
        <MainLayout>
            <Helmet>
                <title>Saad Hasib | Portfolio</title>
            </Helmet>
            {/* Heading section container */}
            <div
                className="w-full flex items-center bg-index-bg md:bg-cover
                    h-[250px] md:h-[350px] lg:h-[512px]"
            >
                {/* Heading text container */}
                <div
                    className="font-body font-medium px-12 py-5 align-centre bg-black/50
                        text-xl md:text-2xl lg:text-4xl"
                >
                    <p>{headerText}</p>
                </div>
            </div>
            {/* Projects cards section container */}
            <div></div>
        </MainLayout>
    );
}

export default PortfolioPage;
