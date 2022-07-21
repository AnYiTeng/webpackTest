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

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch((error) =>
    console.error('Something went wrong when fetching this data: ', error)
  );