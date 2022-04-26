import * as React from "react";
import MainLayout from "../components/main_layout";

const heading = "Python | Machine Learning\nFull Stack Web | Mobile";

function IndexPage() {
    return (
        <MainLayout>
            <div>
                <p>{heading}</p>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
