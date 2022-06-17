import * as React from "react";

type headerProps = {
    mainPage: "main" | "sec" | "blog";
    text: string | string[];
};

function HeaderSection(props: headerProps) {
    // Function to handle single or multiple header lines
    function headingText(text: string | string[]): JSX.Element | JSX.Element[] {
        if (typeof text === "string") {
            return <p>{text}</p>;
        } else {
            return text.map((txt) => {
                return <p>{txt}</p>;
            });
        }
    }
    // Font sizes for main/secondary sections
    const mainStyles = "text-2xl md:text-4xl lg:text-6xl";
    const secStyles = "text-xl md:text-2xl lg:text-4xl";
    return (
        <div
            className="w-full flex items-center
            bg-index-bg md:bg-cover
            h-[250px] md:h-[350px] lg:h-[512px]"
        >
            {/* Heading text container */}
            <div
                className={`font-heading px-12 py-5 align-centre
                backdrop-blur-3xl drop-shadow-lg bg-black/30
                ${props.mainPage === "main" ? mainStyles : secStyles}
                ${props.mainPage === "blog" ? "font-normal" : " font-bold"}`}
            >
                {headingText(props.text)}
            </div>
        </div>
    );
}

export default HeaderSection;
