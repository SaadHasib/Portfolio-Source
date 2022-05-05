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
                    className="font-body font-medium px-12 py-5 align-centre bg-black/50
                        text-xl md:text-2xl lg:text-4xl"
                >
                    <p>{headerText}</p>
                </div>
            </div>
            {/* Blog cards section container */}
            <div
                className="flex flex-col
                    items-center
                    font-body
                    w-full
                    py-5
                    gap-y-5 md:gap-y-6 lg:gap-y-8"
            >
                {/* Blog card */}
                {props.data.allMarkdownRemark.nodes.map((node: any) => (
                    <div
                        className="bg-black
                            shadow-zinc-900 md:shadow-zinc-900
                            flex flex-col md:flex-row
                            shadow-md md:shadow-lg
                            w-11/12 lg:w-8/12
                            min-h-[250px] md:min-h-[350px] lg:min-h-[400px]
                            "
                    >
                        {/* Image */}
                        <img
                            src="/post_thumb1.png"
                            className="h-[100px] w-auto object-cover
                                md:h-[350px] md:w-auto
                                lg:h-[400px] lg:w-auto"
                        ></img>
                        {/* Text container */}
                        <div
                            className="flex flex-col
                                items-centre
                                w-full"
                        >
                            <Link
                                key={node.id}
                                to={`/blog/${node.frontmatter.slug}`}
                                className="block font-bold
                                border-b-2 border-white
                                w-full
                                text-lg md:text-xl
                                px-2 md:px-3
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
