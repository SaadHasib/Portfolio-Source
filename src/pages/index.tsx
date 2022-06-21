import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";
import TextSection from "../components/text_section";

const heading1 = "Python | Machine Learning";
const heading2 = "Full Stack Web | Mobile";

const about1 =
    "Primarily a Python developer, working in the fields of machine learning and data science. Well versed in Javascript and the MERN stack to provide full stack solutions.";
const about2 = "Also a hobbyist 2D/3D graphic designer.";

function IndexPage() {
    return (
        <MainLayout>
            <Helmet>
                <title>Saad Hasib</title>
            </Helmet>
            <HeaderSection mainPage="main">
                <p>{heading1}</p>
                <p>{heading2}</p>
            </HeaderSection>
            {/* About container */}
            <TextSection>
                <p>{about1}</p>
                <br />
                <p>{about2}</p>
            </TextSection>
        </MainLayout>
    );
}

export default IndexPage;
