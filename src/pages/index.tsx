import * as React from "react";
import MainLayout from "../components/main_layout";

const heading1 = "Python | Machine Learning";
const heading2 = "Full Stack Web | Mobile";
const about1 =
    "Primarily a Python developer, working in the fields of machine learning and data science. Well versed in Javascript and the MERN stack to provide full stack solutions.";
const about2 = "Also a hobbyist 2D/3D graphic designer.";

function IndexPage() {
    return (
        <MainLayout>
            <div>
                {/* Heading section container */}
                <div
                    className="w-full flex items-center bg-index-bg
                    h-[250px] md:h-[350px] lg:h-[512px]"
                >
                    {/* HEading text container */}
                    <div
                        className="font-heading font-bold px-12 py-5 align-centre bg-black-transparent
                        text-4xl md:text-6xl lg:text-8xl"
                    >
                        <p>{heading1}</p>
                        <p>{heading2}</p>
                    </div>
                </div>
                {/* About container */}
                <div
                    className="font-body mx-12 mt-12
                    text-lg md:text-xl lg:text-3xl"
                >
                    <p>{about1}</p>
                    <br></br>
                    <p>{about2}</p>
                </div>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
