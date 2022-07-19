const path = require('path')

module.exports = (env) => {
	console.log('Goal:', env.goal)
	console.log('Production:', env.production)

	return {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true
		},
	}
}