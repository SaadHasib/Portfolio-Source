module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            body: ["Montserrat", "sans-serif"],
            heading: ["Lato", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                "index-bg": "url(/imgs/header/index_bg.png)",
                "bg-patt": "url(/imgs/bg/bg_patt.png)",
            },
        },
    },
    plugins: [],
};
