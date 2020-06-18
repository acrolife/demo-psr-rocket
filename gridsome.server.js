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

		// Realisations
		const res2 = await graphql(`
			{
				allWordPressRealisations {
					edges {
						node {
							id
							slug
						}
					}
				}
			}
		`);

		res2.data.allWordPressRealisations.edges.forEach(({ node }) => {
			// console.log(JSON.stringify(node))
			createPage({
				path: `/nos-realisations/${node.slug}`,
				component: './src/templates/Realisation.vue',
				context: {
					realisationId: node.id,
					realisationSlug: node.slug,
				},
			});
		});

		// Posts
		const res4 = await graphql(`
			{
				allWordPressPost {
					edges {
						node {
							id
							slug
						}
					}
				}
			}
		`);

		res4.data.allWordPressPost.edges.forEach(({ node }) => {
			// console.log(JSON.stringify(node))
			createPage({
				path: `/blog/${node.slug}`,
				component: './src/templates/Article.vue',
				context: {
					postId: node.id,
					postSlug: node.slug,
				},
			});
		});

		// Reviews
		const res5 = await graphql(`
			{
				allWordPressReview {
					edges {
						node {
							id
						}
					}
				}
			}
		`);

		res5.data.allWordPressReview.edges.forEach(({ node }) => {
			createPage({
				path: `/votre-avis-compte/${node.id}`,
				component: './src/templates/VotreAvisCompte.vue',
				context: {
					reviewId: node.id,
				},
			});
		});


	});
};
