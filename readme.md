Very basic and tiny masonry layout (1kb). Responsive and resizeable blocks.

### Installation

`npm install @gerardest/cascader`

### Usage

`import {cascade} from './cascader.js'`

Simplest usage is to call cascader passing the container of the masonry elements  
`cascade('#container')`  
or
~~~
let container = document.querySelector('#cascada')
cascade(container)
~~~

### Options
~~~
cascade('#container', {
    minWidth: 200,
    gap: 20, // To set vertical and horizontal gap equally
    verticalGap : 30
    horizontalGap : 30
})
~~~
