import * as React from "react";

type sectionProps = {
    children: React.ReactNode;
};

function IndexSection(props: sectionProps) {
    return <div className="snap-start h-screen">{props.children}</div>;
}

export default IndexSection;
