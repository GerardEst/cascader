import cascader from './cascader.js'

cascader(document.querySelector('#cascada'), {
    minWidth: 200,
    gap: 20, // To set vertical and horizontal gap equally
    verticalGap : 30
    horizontalGap : 30
})

o només amb el selector

cascader('#cascada', {
    minWidth: 200,
    gap: 20, // To set vertical and horizontal gap equally
    verticalGap : 30
    horizontalGap : 30
})