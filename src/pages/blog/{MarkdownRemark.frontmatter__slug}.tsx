import * as React from "react";
import { graphql } from "gatsby";
import MainLayout from "../../components/main_layout";
require(`katex/dist/katex.min.css`);
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

function BlogPost(props: any) {
    return (
        <MainLayout>
            {/* Post container */}
            <div
                className="bg-black mx-auto
                w-11/12 md:w-10/12 lg:w-9/12
                pt-10
                min-h-screen"
            >
                {/* Main heading */}
                <h1
                    className="font-heading font-bold
                    pt-3
                    text-2xl md:text-4xl
                    px-3 md:px-10
                    pb-5 md:pb-10"
                >
                    {props.data.markdownRemark.frontmatter.title}
                </h1>
                {/* Markdown container */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                    className=" post-body
                    font-body font-normal
                    list-disc
                    text-base md:text-lg
                    px-3 md:px-10"
                ></div>
            </div>
        </MainLayout>
    );
}

export const query = graphql`
    query BlogPage($id: String) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                tags
            }
            html
        }
    }
`;

export default BlogPost;
