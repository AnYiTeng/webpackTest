const {file, parse} = require('./globals.js')

function component() {
	const el = document.createElement('div')

	// el.innerHTML = _.join(['Hello', 'Webpack'], ' ')
	el.innerHTML = join(['Hello', 'Webpack'], ' ')

	// 假设我们处于 window 上下文
	// this.alert('Hmmm, this probably isn\'t a great idea...')

	parse()
	console.log(file, 'file')

	return el
}

document.body.appendChild(component())