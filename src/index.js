import _ from 'lodash'
import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'
import DataJson, { name } from './data.json'
import './style.css'

function component() {
    const ele = document.createElement('div')
    // lodash 在当前 script 中使用 import 引入
    ele.innerHTML = _.join(['Hellow', 'Webpack'], ' ')
    ele.classList.add('hello')

    const myIcon = new Image()
    myIcon.src = Icon
    ele.appendChild(myIcon)

    console.log(Data)
    console.log(Notes)
    console.log(DataJson, name)

    return ele
}

document.body.appendChild(component())
