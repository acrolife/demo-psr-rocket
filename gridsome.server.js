//gridsome.server.js

module.exports = function(api) {
	api.createPages(async ({ graphql, createPage }) => {
		// Services
		const res = await graphql(`
			{
				allWordPressServices {
					edges {
						node {
							id
							slug
						}
					}
				}
			}
		`);

		res.data.allWordPressServices.edges.forEach(({ node }) => {
			// console.log(JSON.stringify(node))
			createPage({
				path: `/nos-domaines-dexpertise/${node.slug}`,
				component: './src/templates/Service.vue',
				context: {
					serviceId: node.id,
					serviceSlug: node.slug,
				},
			});
		});

		
	});
};
