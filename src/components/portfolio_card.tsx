import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type portCardData = {
    node: {
        id: string;
        title: string;
        images: {
            header: string;
            display: string[];
        };
        description: string;
        technologies: string[];
    };
};

type cardProps = {
    node: portCardData;
};

function PortfolioCard(props: cardProps) {
    return (
        <div>
            <p>{props.node.node.title}</p>
            <p>{props.node.node.description}</p>
        </div>
    );
}

export default PortfolioCard;
