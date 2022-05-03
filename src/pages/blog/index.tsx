import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import MainLayout from "../../components/main_layout";

type blogIdxProps = {
    data: {
        allMarkdownRemark: {
            nodes: {
                frontmatter: {
                    title: string;
                    slug: string;
                    excerpt: string;
                    tags: string;
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
            <Helmet>
                <title>Saad Hasib | Blog</title>
            </Helmet>
            {/* Heading section container */}
            <div
                className="w-full flex items-center bg-index-bg
                    h-[250px] md:h-[350px] lg:h-[512px]"
            >
                {/* Heading text container */}
                <div
                    className="font-body font-medium px-12 py-5 align-centre bg-black-transparent
                        text-xl md:text-2xl lg:text-4xl"
                >
                    <p>{headerText}</p>
                </div>
            </div>
            {/* Blog cards section container */}
            <div
                className="flex flex-wrap
                    justify-center
                    font-body
                    py-5 md:py-10
                    px-5 md:px-10 lg:px-32
                    gap-y-5 md:gap-y-10
                    gap-x-3 md:gap-x-10 lg:gap-x-28"
            >
                {/* Blog card */}
                {props.data.allMarkdownRemark.nodes.map((node: any) => (
                    <div
                        className="bg-black rounded-2xl
                            shadow-zinc-800 md:shadow-zinc-800
                            shadow-md md:shadow-lg
                            w-[300px] md:w-[350px] lg:w-[450px]
                            min-h-[250px] md:min-h-[350px] lg:min-h-[400px]
                            flex flex-col
                            "
                    >
                        <Link
                            key={node.id}
                            to={`/blog/${node.frontmatter.slug}`}
                            className="block font-bold
                                border-b-2 border-white
                                text-lg md:text-xl
                                mx-2 md:mx-3
                                px-0 md:px-1
                                pt-3 md:pt-5
                                pb-2 md:pb-3
                                transition-all duration-200
                                md:hover:text-blue-500"
                        >
                            {node.frontmatter.title}
                        </Link>
                        <div
                            className="font-normal
                                text-md md:text-lg
                                px-2 md:px-3
                                pt-3 md:pt-5
                                pb-2 md:pb-3"
                        >
                            {node.frontmatter.excerpt}
                        </div>
                        <div
                            className="font-normal text-zinc-400
                                text-sm md:text-base
                                px-5 pt-2 pb-4
                                mt-auto"
                        >
                            {node.frontmatter.tags}
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
}

export const query = graphql`
    query BlogIdx {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    slug
                    excerpt
                    tags
                }
                id
            }
        }
    }
`;

export default BlogHome;
