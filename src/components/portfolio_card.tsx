import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { portCardProps } from "../types";

function PortfolioCard(props: portCardProps) {
    return (
        <div>
            <p>{props.node.node.title}</p>
            <p>{props.node.node.description}</p>
        </div>
    );
}

export default PortfolioCard;
