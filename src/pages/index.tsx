import * as React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";

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
            {/* Heading section container */}
            <div
                className="w-full flex items-center
                    bg-index-bg md:bg-cover
                    h-[250px] md:h-[350px] lg:h-[512px]"
            >
                {/* Heading text container */}
                <div
                    className="font-heading font-bold px-12 py-5 align-centre
                        backdrop-blur-3xl drop-shadow-lg bg-black/30
                        text-2xl md:text-4xl lg:text-6xl"
                >
                    <p>{heading1}</p>
                    <p>{heading2}</p>
                </div>
            </div>
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
