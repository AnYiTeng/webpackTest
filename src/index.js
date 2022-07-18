import _ from 'lodash'
// import Print from './print.js'

function component() {
	const el = document.createElement('div')

	// lodash 是由当前 script 脚本 import 进来的
	el.innerHTML = _.join(['Hello', 'Webpack'], ' ')
	// el.onclick = Print.bind(null, 'hello webpack')

	return el
}

document.body.appendChild(component())