import _ from 'lodash'

function component() {
    const ele = document.createElement('div')
    // lodash 在当前 script 中使用 import 引入
    ele.innerHTML = _.join(['Hellow', 'Webpack'], ' ')

    return ele
}

document.body.appendChild(component())
