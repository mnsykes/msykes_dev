module.exports = {
	siteMetadata: {
		title: "Matthew Sykes",
		menuLinks: [
			{
				name: "home",
				link: "/"
			},
			{
				name: "about",
				link: "/about"
			},
			{
				name: "projects",
				link: "/projects"
			},
			{
				name: "contact",
				link: "/contact"
			}
		]
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-fontawesome-css",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `thumbs`,
				path: `${__dirname}/src/projects/thumbs`
			}
		},
		`gatsby-transformer-remark`
	]
};
