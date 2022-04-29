module.exports = {
    siteMetadata: {
        title: `Saad Hasib`,
        siteUrl: `https://saadhasib.github.io`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/user_data/posts/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
