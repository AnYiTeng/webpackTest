import _ from 'lodash'
import printMe from './print.js'

function component() {
	const el = document.createElement('div')
	const btn = document.createElement('button')

	el.innerHTML = _.join(['Hellow', 'Webpack'], ' ')
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	el.appendChild(btn);

	return el
}

document.body.appendChild(component())

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!')
		printMe()
	})
}