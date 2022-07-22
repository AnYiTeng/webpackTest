import _ from 'lodash'

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js')
			.then(registration => console.log('SW registered: ', registration))
			.catch(registrationError => console.log('SW registration failed: ', registrationError))
	})
}

function component() {
	const el = document.createElement('div')

	el.innerHTML = _.join(['Hello', 'Webpack'], ' ')

	return el
}

document.body.appendChild(component())