let container_width = 0
let rows = 0
let cols = 0
let vertical_gap = 0
let horizontal_gap = 0
let minWidth = 0
let element = null
let bricks = null

let resizeObserver = new ResizeObserver( (entries) => {
  init()
})

export function cascade(container_element, options){

    horizontal_gap = options?.horizontalGap ?? options?.gap ?? 20
    vertical_gap = options?.verticalGap ?? options?.gap ?? 20
    minWidth = options?.minWidth || 200
    element = typeof container_element === 'string' ? document.querySelector(container_element) : container_element
    container_width = element.offsetWidth
    cols = Math.floor(container_width / minWidth)

    bricks = element.children

    element.style.position = 'relative'

    init()
}
  
function init(){
  positionBricks()
  setContainerHeight()
}

export function removeCascade(){  
  resizeObserver.disconnect()
  element.removeAttribute('style')
  for(let brick of bricks) brick.removeAttribute('style')
}

function positionBricks(){
  for(let i=0; i<bricks.length; i++){
    
    // Recalculate container_width when resize and redistribute columns
    container_width = element.offsetWidth
    cols = Math.floor(container_width / minWidth)

    const brick = bricks[i]

    const brick_row = Math.floor(i/cols)
    const brick_col = i%cols
    const brick_width = 100/cols
    const gap_reduce = horizontal_gap*(cols-1)/cols
    if(brick_row > rows) rows = brick_row

    brick.style.position = 'absolute'
    brick.setAttribute('row', brick_row)
    brick.setAttribute('col', brick_col)

    // Horizontal positioning
    brick.style.width = `calc(${brick_width}% - ${gap_reduce}px)`
    brick.style.left = `calc(${brick_width*brick_col}% + ${horizontal_gap/cols * brick_col}px`

    // Vertical positioning: sume of the precedent bricks in the column 
    const bricks_in_col = element.querySelectorAll(`[col='${brick_col}']`)
    let brick_column_height = 0

    for(let brick_in_col of bricks_in_col){
      if(brick_in_col.getAttribute('row') > brick_row) continue
      brick_column_height = brick_column_height + brick_in_col.offsetHeight + vertical_gap
    }

    brick_column_height = brick_column_height - brick.offsetHeight - vertical_gap
    brick.style.top = brick_column_height + 'px'

    resizeObserver.observe(brick)
    
  }
}

// Check the size of largest column and resize the cascade container
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