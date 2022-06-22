let cols = 0
let rows = 0
let vertical_gap = 0
let horizontal_gap = 0
let element = null
let resizeObserver = null
let bricks = null

export default function(container_element, options){
    cols = options.columns
    horizontal_gap = options.horizontalGap || options.gap
    vertical_gap = options.verticalGap || options.gap
    element = typeof container_element === 'string' ? document.querySelector(container_element) : container_element

    if(!element.id) console.error('Cascader: Container needs an id')

    bricks = document.querySelectorAll(`#${element.id} > *`)

    element.style.position = 'relative'

    console.log("Build cascade")
    
    positionBricks()
    setContainerHeight()
    listenSizeChanges()

}

export function remove(){
  console.log("Removing cascade")
  
  resizeObserver.disconnect() 
  element.removeAttribute('style')
  for(let brick of bricks) brick.removeAttribute('style')
  
}

// Usa la Resize Observer API para detectar cambios de tamaño en cualquier elemento -> https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
function listenSizeChanges(){
  resizeObserver = new ResizeObserver( () => {
    console.log("Resized")
    positionBricks()
    setContainerHeight()
  })
  for(let brick of bricks) resizeObserver.observe(brick)
}

function positionBricks(){
  for(let i=0; i<bricks.length; i++){
    const brick = bricks[i]

    const brick_row = Math.floor(i/cols)
    const brick_width = 100/cols
    const brick_col = i%cols
    const gap_reduce = horizontal_gap*(cols-1)/cols
    let brick_top = 0
    if(brick_row > rows) rows = brick_row
    
    brick.style.position = 'absolute'
    brick.setAttribute('row', brick_row)
    brick.setAttribute('col', brick_col)
    
    brick.style.width = `calc(${brick_width}% - ${gap_reduce}px)`

    brick.style.left = `calc(${brick_width*brick_col}% + ${horizontal_gap/cols * brick_col}px`

    const bricks_in_col = element.querySelectorAll(`[col='${brick_col}']`)
    
    for(let brick_in_col of bricks_in_col){
      if(brick_in_col.getAttribute('row') >= brick_row) continue

      brick_top = brick_top + brick_in_col.offsetHeight
      brick.style.top = `${brick_top+vertical_gap*brick_row}px`
    }  
  }
}

function setContainerHeight(){
  let largest_col = 0
  
  for(let i=0; i<cols; i++){
    const col = element.querySelectorAll(`[col='${i}']`)
    
    let total_height = 0
    
    for(let el of col){
      let row = el.getAttribute('row')
      let additional_gap = row < rows ? vertical_gap : 0
      total_height = total_height + el.offsetHeight + additional_gap
    }

    if(total_height > largest_col) largest_col = total_height
  }

  element.style.height = largest_col+'px'
}