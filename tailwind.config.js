module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            body: ["Montserrat", "sans-serif"],
            heading: ["Lato", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "index-bg": "url(/index_bg.png)",
            },
        },
    },
    plugins: [],
};
