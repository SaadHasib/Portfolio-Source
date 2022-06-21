import * as React from "react";
import { indexSectionProps } from "../types";

function IndexSection(props: indexSectionProps) {
    return <div className="snap-start h-screen">{props.children}</div>;
}

export default IndexSection;
