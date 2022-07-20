import _ from 'lodash'
import printMe from './print.js'
import './style.css'

function component() {
	const el = document.createElement('div')
	const btn = document.createElement('button')

	el.innerHTML = _.join(['Hellow', 'Webpack'], ' ')
	btn.innerHTML = 'Click me and check the console!!';
	btn.onclick = printMe;

	el.appendChild(btn);

	return el
}

let element = component() // 存储 element 以在 print.js 修改时重新渲染
document.body.appendChild(element)

console.log(module.hot, 'module.hot???')
if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!!')
		document.body.removeChild(element)
		element = component() // 重新渲染 component，以便更新 click 处理函数
		document.body.appendChild(element)
	})
}