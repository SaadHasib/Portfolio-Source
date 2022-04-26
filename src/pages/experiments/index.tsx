import * as React from "react";
import MainLayout from "../../components/main_layout";

const headerText =
    "Here you can look at some of the experiments I conduct during my learning process.";

function ExperimentsHome() {
    return (
        <MainLayout>
            <div>
                <p>{headerText}</p>
            </div>
        </MainLayout>
    );
}

export default ExperimentsHome;
