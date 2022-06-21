import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import MainLayout from "../components/main_layout";
import HeaderSection from "../components/header";
import PortfolioCard from "../components/portfolio_card";

type portIdxProps = {
    data: {
        allPortfolioJson: {
            edges: {
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
            }[];
        };
    };
};

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

const headerText =
    "Here is a showcase of a selection of projects I have worked on.";

function PortfolioPage(props: portIdxProps) {
    return (
        <MainLayout>
            <Helmet>
                <title>Saad Hasib | Portfolio</title>
            </Helmet>
            <HeaderSection mainPage="sec">
                <p>{headerText}</p>
            </HeaderSection>
            {/* Projects cards section container */}
            {props.data.allPortfolioJson.edges.map(
                (node: portCardData): JSX.Element => (
                    <PortfolioCard node={node} />
                )
            )}
        </MainLayout>
    );
}

export const query = graphql`
    query PortIdx {
        allPortfolioJson {
            edges {
                node {
                    title
                    images {
                        display
                        header
                    }
                    technologies
                    description
                    images {
                        display
                        header
                    }
                    id
                }
            }
        }
    }
`;

export default PortfolioPage;
