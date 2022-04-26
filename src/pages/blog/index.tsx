import * as React from "react";
import MainLayout from "../../components/main_layout";

const headerText =
    "In this blog I share some of my knowledge I gathered while learning new technologies.";

function BlogHome() {
    return (
        <MainLayout>
            <div>
                <p>{headerText}</p>
            </div>
        </MainLayout>
    );
}

export default BlogHome;
