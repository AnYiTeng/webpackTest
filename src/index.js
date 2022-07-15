import _ from 'lodash'
import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'
import DataJson, { name } from './data.json'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'
import an1 from 'ayt/an/an1'
import './style.css'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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

an1()
