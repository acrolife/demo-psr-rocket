// const tailwindcss = require("tailwindcss")

module.exports = {
	// chainWebpack (config) {
	// 	config.mode('development')
	// },
	siteName: 'PS-Rénovation',
	siteDescription:
		"L'expertise en rénovation de bâtiment, intérieure, extérieure, et construction d'extension.",

	templates: {
		WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
		WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
		WordPressPostTag: '/tag/:slug', // adds a route for the "post_tag" post type (Optional)
	},

	plugins: [
		{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-89220505-1'
      }
    },
		{
			use: '@gridsome/source-wordpress',
			options: {
				baseUrl: 'https://psr2222.creativityquarks.com/',
				typeName: 'WordPress', // GraphQL schema name (Optional)
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			/**
			 * These are the default options. You don't need to set any options to get
			 * going. Seriously, you don't need to declare tailwind.config.js.
			 */
			options: {
				tailwindConfig: './tailwind.config.js',
				purgeConfig: {},
				presetEnvConfig: {},
				shouldPurge: false,
				shouldImport: true,
				shouldTimeTravel: true,
			},
		},
		{
			use: 'gridsome-plugin-purgecss',
			// default options, the following will be included if you don't provide anything
			options: {
				content: [
					'./src/**/*.vue',
					'./src/**/*.js',
					'./src/**/*.jsx',
					'./src/**/*.pug',
					'./src/**/*.md'
				],
				defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
			}
		},
	],
	// chainWebpack: (config) => {
	// 	config.module
	// 		.rule('postcss-loader')
	// 		.test(/.css$/)
	// 		.use(['tailwindcss', 'autoprefixer'])
	// 		.loader('postcss-loader');
	// },
	// css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         tailwindcss
  //       ],
  //     },
  //   },
  // }
};
