async function getComponent() {
	const ele = document.createElement('div')
	const {default: _} = await import('lodash')

	ele.innerHTML = _.join(['Hello', 'webpack'], ' ')

	return ele
}

getComponent()
	.then(component => document.body.appendChild(component))
