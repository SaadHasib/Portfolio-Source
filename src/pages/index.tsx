import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";

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
            <HeaderSection mainPage="main" text={[heading1, heading2]} />
            {/* About container */}
            <div
                className="font-body font-medium px-12
                    my-12
                    py-6
                    text-lg md:text-xl lg:text-3xl
                    bg-black/50"
            >
                <p>{about1}</p>
                <br></br>
                <p>{about2}</p>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
