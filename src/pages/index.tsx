import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";
import TextSection from "../components/text_section";
import IndexSection from "../components/index_section";

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
            {/* Scroll snapping div */}
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
                {/* Header and About */}
                <IndexSection>
                    <HeaderSection mainPage="main">
                        <h2>{heading1}</h2>
                        <h2>{heading2}</h2>
                    </HeaderSection>
                    <TextSection>
                        <h3>About Me</h3>
                        <br />
                        <p>{about1}</p>
                        <p>{about2}</p>
                    </TextSection>
                </IndexSection>
                {/* Skills */}
                <IndexSection>
                    <TextSection>
                        <h3>Skills</h3>
                    </TextSection>
                </IndexSection>
                {/* Portfolio */}
                <IndexSection>
                    <TextSection>
                        <h3>Portfolio</h3>
                    </TextSection>
                </IndexSection>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
