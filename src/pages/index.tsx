import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";

const heading1 = "Python | Machine Learning";
const heading2 = "Full Stack Web | Mobile";
const about1 =
    "Primarily a Python developer, working in the fields of machine learning and data science. Well versed in Javascript and the MERN stack to provide full stack solutions.";
const about2 = "Also a hobbyist 2D/3D graphic designer.";

const headerElement = (
    <div>
        <p>{heading1}</p>
        <p>{heading2}</p>
    </div>
);

function IndexPage() {
    return (
        <MainLayout>
            <Helmet>
                <title>Saad Hasib</title>
            </Helmet>
            <HeaderSection mainPage="main">{headerElement}</HeaderSection>
            {/* About container */}
            <div
                className="font-body font-medium
                    text-lg md:text-xl lg:text-3xl
                    px-12 py-12 my-12
                    bg-black"
            >
                <p>{about1}</p>
                <br />
                <p>{about2}</p>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
