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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		"gatsby-plugin-fontawesome-css",
		"gatsby-plugin-styled-components",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				short_name: `starter`,
				short_url: `/`,
				icon: `src/images/matt2.jpg`
			}
		},
		`gatsby-transformer-remark`
	]
};
