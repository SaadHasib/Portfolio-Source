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
                "pat1-bg": "url(/pattern1.png)",
                "pat2-bg": "url(/pattern2.png)",
                "pat4-bg": "url(/pattern4.png)",
            },
        },
    },
    plugins: [require("daisyui")],
};
