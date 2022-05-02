import * as React from "react";
import MainLayout from "../../components/main_layout";

const headerText =
    "Here you can look at some of the experiments I conduct during my learning process.";

function ExperimentsHome() {
    return (
        <MainLayout>
            {/* Heading section container */}
            <div
                className="w-full flex items-center bg-index-bg
                    h-[250px] md:h-[350px] lg:h-[512px]"
            >
                {/* Heading text container */}
                <div
                    className="font-body font-medium px-12 py-5 align-centre bg-black-transparent
                        text-xl md:text-2xl lg:text-4xl"
                >
                    <p>{headerText}</p>
                </div>
            </div>
            {/* Experiments cards section container */}
            <div></div>
        </MainLayout>
    );
}

export default ExperimentsHome;
