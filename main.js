import {cascade, removeCascade} from './cascader.js'

cascade('#cascada', {
    minWidth: 300, 
})

document.querySelector('#remove').addEventListener('click', () => removeCascade())
document.querySelector('#cascade').addEventListener('click', () => {
    cascade(document.querySelector('#cascada'), {
        minWidth: 300,
        gap: 20
    })
})