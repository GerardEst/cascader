let cols = 0
let element = null

export default function(container_element, col_number){
    cols = col_number
    element = container_element

    if(!element.id) console.error('Cascader: Container needs an id')

    const bricks = document.querySelectorAll(`#${element.id} > *`)

    element.style.position = 'relative'

    // Listen for size changes in bricks
    listenSizeChanges(bricks)

    // Set the position of the bricks
    positionBricks(bricks)

    // Set container height determined by the largest col
    setContainerHeight()

}

// Usa la Resize Observer API para detectar cambios de tamaño en cualquier elemento -> https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
function listenSizeChanges(bricks){
  for(let brick of bricks){
    const resizeObserver = new ResizeObserver( () => {
      positionBricks(bricks)
      setContainerHeight()
    })
    resizeObserver.observe(brick)
  }
}

function positionBricks(bricks){
  for(let i=0; i<bricks.length; i++){
    const brick = bricks[i]

    const brick_row = Math.floor(i/cols)
    const brick_width = 100/cols
    const brick_col = i%cols
    let brick_top = 0
    
    brick.style.position = 'absolute'
    brick.setAttribute('row', brick_row)
    brick.setAttribute('col', brick_col)
    
    brick.style.width = brick_width+'%'
    brick.style.left = brick_width*brick_col+'%'
    

    const bricks_in_col = element.querySelectorAll(`[col='${brick_col}']`)
    
    for(let brick_in_col of bricks_in_col){
      if(brick_in_col.getAttribute('row') >= brick_row) continue

      brick_top = brick_top + brick_in_col.offsetHeight
      brick.style.top = brick_top+'px'
    }  
  }
}

function setContainerHeight(){
  let largest_col = 0
  
  for(let i=0; i<cols; i++){
    const col = element.querySelectorAll(`[col='${i}']`)
    let total_height = 0
    for(let el of col){
      total_height = total_height + el.offsetHeight
    }
    if(total_height > largest_col) largest_col = total_height
  }

  element.style.height = largest_col+'px'
}