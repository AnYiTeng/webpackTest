function component() {
    const ele = document.createElement('div')
    ele.innerHTML = _.join(['Hellow', 'Webpack'], ' ')
    return ele
}

document.body.appendChild(component())