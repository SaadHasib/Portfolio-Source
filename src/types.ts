export type mainLayoutProps = {
    children: React.ReactNode;
};

export type indexSectionProps = {
    children: React.ReactNode;
};

export type headerProps = {
    mainPage: "main" | "sec" | "blog";
    children: React.ReactNode;
};

export type textSectionProps = {
    children: React.ReactNode;
};

export type blogPostCardData = {
    frontmatter: {
        title: string;
        slug: string;
        excerpt: string;
        tags: string;
    };
    id: string;
};

export type blogCardProps = {
    node: blogPostCardData;
};

export type blogIdxProps = {
    data: {
        allMarkdownRemark: {
            nodes: blogPostCardData[];
        };
    };
};

export type portCardData = {
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

export type portCardProps = {
    node: portCardData;
};

export type portIdxProps = {
    data: {
        allPortfolioJson: {
            edges:portCardData[];
        };
    };
};
