import {cascade, removeCascade} from './cascader.js'

cascade('#cascada', {
    columns: 3,
    gap: 20,
    //verticalGap : 30
    //horizontalGap : 30
})

document.querySelector('#remove').addEventListener('click', () => removeCascade())
document.querySelector('#cascade').addEventListener('click', () => {
    cascade(document.querySelector('#cascada'), {
        columns: 3,
        gap: 20,
        //verticalGap : 30
        //horizontalGap : 30
    })
})