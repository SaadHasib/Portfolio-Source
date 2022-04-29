import * as React from "react";
import { graphql, Link } from "gatsby";
import MainLayout from "../../components/main_layout";

type blogIdxProps = {
    data: {
        allMarkdownRemark: {
            nodes: {
                frontmatter: {
                    title: string;
                    slug: string;
                };
                id: string;
            }[];
        };
    };
};

const headerText =
    "In this blog I share some of the knowledge, which I gathered, while learning new technologies.";

function BlogHome(props: blogIdxProps) {
    return (
        <MainLayout>
            {/* Heading section container */}
            <div
                className="w-full flex items-center bg-index-bg
                    h-[250px] md:h-[350px] lg:h-[512px]"
            >
                {/* Heading text container */}
                <div
                    className="font-body font-normal px-12 py-5 align-centre bg-black-transparent
                        text-xl md:text-2xl lg:text-4xl"
                >
                    <p>{headerText}</p>
                </div>
            </div>
            {/* Blog cards section container */}
            <div>
                {props.data.allMarkdownRemark.nodes.map((node: any) => (
                    <Link key={node.id} to={`/blog/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                ))}
            </div>
        </MainLayout>
    );
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    slug
                }
                id
            }
        }
    }
`;

export default BlogHome;
