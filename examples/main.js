import { cascade, removeCascade } from '../build/cascader-min.js'

cascade("#container");

document.querySelector('#remove').addEventListener('click', () => removeCascade())
document.querySelector('#activate').addEventListener('click', () => {
    cascade(document.querySelector('#container'))
})
