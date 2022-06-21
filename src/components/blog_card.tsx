import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { blogCardProps } from "../types";

function BlogCard(props: blogCardProps) {
    return (
        <div
            className="bg-black
            shadow-md
            shadow-zinc-900
            flex flex-col md:flex-row
            w-11/12 lg:w-8/12
            min-h-[300px] lg:min-h-[400px]
            "
        >
            {/* Image */}
            <StaticImage
                src="../../static/imgs/post_thumbs/post_thumb1.png"
                alt="post thumbnail"
                className="shrink-0 
                w-auto h-[100px] object-cover
                md:w-[300px] md:h-auto
                lg:w-[400px] lg:h-auto"
            ></StaticImage>
            {/* Text container */}
            <div
                className="flex flex-col
                items-centre grow
                w-full"
            >
                {/* Heading */}
                <Link
                    key={props.node.id}
                    to={`/blog/${props.node.frontmatter.slug}`}
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
                    {props.node.frontmatter.title}
                </Link>
                {/* Excerpt */}
                <div
                    className="font-normal
                text-md md:text-lg
                px-2 md:px-3
                pt-3 md:pt-5
                pb-2 md:pb-3
                "
                >
                    {props.node.frontmatter.excerpt}
                </div>
                {/* Tags */}
                <div
                    className="font-normal text-zinc-400
                text-sm md:text-base
                px-5 pt-2 pb-4
                mt-auto"
                >
                    {props.node.frontmatter.tags}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
