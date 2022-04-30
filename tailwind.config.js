module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            body: ["Montserrat", "sans-serif"],
            heading: ["Lato", "sans-serif"],
        },
        extend: {
            colors: {
                "black-transparent": "#00000080",
            },
            backgroundImage: {
                "index-bg": "url(/index_bg.png)",
                "pat1-bg": "url(/pattern_fab1.png)",
                "pat2-bg": "url(/pattern_fab2.png)",
            },
        },
    },
    plugins: [],
};
