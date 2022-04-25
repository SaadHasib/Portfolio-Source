import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio_shm`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      'gatsby-plugin-postcss',
],
}

export default config
