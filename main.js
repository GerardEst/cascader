import cascader, {remove} from './cascader.js'

cascader('#cascada', {
    columns: 3,
    gap: 20,
    //verticalGap : 30
    //horizontalGap : 30
})

document.querySelector('#remove').addEventListener('click', () => remove())
document.querySelector('#cascade').addEventListener('click', () => {
    cascader(document.querySelector('#cascada'), {
        columns: 3,
        gap: 20,
        //verticalGap : 30
        //horizontalGap : 30
    })
})