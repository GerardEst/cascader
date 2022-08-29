### Installation

`npm install @gerardest/cascader`

### Usage

`import cascader from './cascader.js'`

Simplest usage is to call cascader passing the container of the masonry elements  
`cascader('#container')`  
or
~~~
let container = document.querySelector('#cascada')
cascader(container)
~~~

### Options
~~~
cascader('#container', {
    minWidth: 200,
    gap: 20, // To set vertical and horizontal gap equally
    verticalGap : 30
    horizontalGap : 30
})
~~~
