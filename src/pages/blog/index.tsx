import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import MainLayout from "../../components/main_layout";
import HeaderSection from "../../components/header";
import BlogCard from "../../components/blog_card";

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

type postCardData = {
    frontmatter: {
        title: string;
        slug: string;
        excerpt: string;
        tags: string;
    };
    id: string;
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
            <HeaderSection mainPage="sec" text={headerText} />
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
                {props.data.allMarkdownRemark.nodes.map(
                    (node: postCardData): JSX.Element => (
                        <BlogCard node={node} />
                    )
                )}
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
