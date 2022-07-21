import * as _ from 'lodash'

function component() {
  const ele = document.createElement('div')
  ele.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return ele
}

document.body.appendChild(component())