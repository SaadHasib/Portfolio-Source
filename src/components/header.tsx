import * as React from "react";

type headerProps = {
    mainPage: "main" | "sec" | "blog";
    children: React.ReactNode;
};

function HeaderSection(props: headerProps) {
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
                backdrop-blur-xl bg-black/30
                border-b-2 border-r-2 border-slate-600/30
                ${props.mainPage === "main" ? mainStyles : secStyles}
                ${props.mainPage === "blog" ? "font-normal" : " font-bold"}`}
            >
                {props.children}
            </div>
        </div>
    );
}

export default HeaderSection;
