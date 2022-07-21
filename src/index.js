import _ from 'lodash'
import chalk from 'chalk'

if (process.env.NODE_ENV !== 'production') {
	console.log(chalk.bgBlueBright('Looks like we are in development mode!'))
}

function component() {
	const el = document.createElement('div')

	el.innerHTML = _.join(['Hello!!', 'Webpack'], ' ')

	return el
}

document.body.appendChild(component())