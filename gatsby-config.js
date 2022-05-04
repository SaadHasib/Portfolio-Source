module.exports = {
    siteMetadata: {
        title: `Saad Hasib`,
        siteUrl: `https://saadhasib.github.io`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/user_data/posts/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            strict: `ignore`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: "carbon",
                            theme: "vscode",
                            lineNumbers: true,
                        },
                    },
                ],
            },
        },
    ],
};
