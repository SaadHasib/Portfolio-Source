import * as React from "react";

type sectionProps = {
    children: React.ReactNode;
};

function MainSection(props: sectionProps) {
    return (
        <div
            className="font-body font-medium
                    text-lg md:text-xl lg:text-3xl
                    px-12 py-12 my-12
                    bg-black"
        >
            {props.children}
        </div>
    );
}

export default MainSection;
