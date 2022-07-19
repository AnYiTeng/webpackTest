import _ from 'lodash'
const lists = require('./template/' + name + '.ejs')

function component() {
	const el = document.createElement('div')
	console.log(lists, 'lists???')

	el.innerHTML = _.join(['Hello', 'Webpack'], ' ')

	return el
}

document.body.appendChild(component())