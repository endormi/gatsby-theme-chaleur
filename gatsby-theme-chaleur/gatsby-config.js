module.exports = {
    plugins: [
        "gatsby-plugin-theme-ui",
        {
        resolve: 'gatsby-plugin-page-creator',
        options: {
            path: `${__dirname}/src/pages`,
            }
        }
    ]
};