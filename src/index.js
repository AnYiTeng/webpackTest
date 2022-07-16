import _ from 'lodash'
import printMe from './print.js'

function component() {
	const ele = document.createElement('div')
	const btn = document.createElement('button')

	// lodash 在当前 script 中使用 import 引入
	ele.innerHTML = _.join(['Hellow', 'Webpack'], ' ')

	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe

	ele.appendChild(btn)

	return ele
}

document.body.appendChild(component())
