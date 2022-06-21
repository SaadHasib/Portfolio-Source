import * as React from "react";
import { textSectionProps } from "../types";

function MainSection(props: textSectionProps) {
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
