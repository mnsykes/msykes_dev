module.exports = {
	siteMetadata: {
		title: "msykes_dev"
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-fontawesome-css",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/"
			}
		}
	]
};
