function component() {
	const el = document.createElement('div')

	// el.innerHTML = _.join(['Hello', 'Webpack'], ' ')
	el.innerHTML = join(['Hello', 'Webpack'], ' ')

	return el
}

document.body.appendChild(component())