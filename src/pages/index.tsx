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
            {/* Heading section container */}
            <div className="w-full h-[512px] bg-red-500 flex items-center bg-index-bg">
                {/* HEading text container */}
                <div className="font-heading font-bold text-8xl px-12 py-5 align-centre bg-black-transparent">
                    <p>{heading1}</p>
                    <p>{heading2}</p>
                </div>
            </div>
            {/* About container */}
            <div className="font-body text-3xl ml-12 mt-12">
                <p>{about1}</p>
                <br></br>
                <p>{about2}</p>
            </div>
        </MainLayout>
    );
}

export default IndexPage;
