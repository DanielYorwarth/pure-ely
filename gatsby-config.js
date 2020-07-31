const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Pure Ely`,
    description: `Pure Ely is a Beauty, Aesthetics, Academy and Hair Salon based in Ely.`,
    author: `@volleydigital`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/header-icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(fullConfig),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
            require(`autoprefixer`),
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
};
