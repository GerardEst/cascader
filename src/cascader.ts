let container_width: number
let rows: number
let cols: number
let vertical_gap: number
let horizontal_gap: number
let minWidth: number
let container: HTMLElement | null
let bricks: any

type CascadeContainer = string | HTMLElement
export interface CascadeOptions {
  minWidth: number,
  gap?: number,
  verticalGap?: number,
  horizontalGap?: number
}

let resizeObserver = new ResizeObserver( () => {
  init()
})

export function cascade(container_container: CascadeContainer, options: CascadeOptions){
  
  horizontal_gap = options.horizontalGap || options.gap || 20
  vertical_gap = options.verticalGap || options.gap || 20
  minWidth = options.minWidth || 200

  container = typeof container_container === 'string' ? document.querySelector(container_container) : container_container
  container_width = container!.offsetWidth
  cols = Math.floor(container_width / minWidth)

  bricks = container!.children // Esto seguro que es una HTMLCollection

  container!.style.position = 'relative'

  init()
}
  
function init(){
  positionBricks()
  setContainerHeight()
}

export function removeCascade(){  
  resizeObserver.disconnect()
  container!.removeAttribute('style')
  for(let brick of bricks) brick.removeAttribute('style')
}

function positionBricks(){
  for(let i=0; i<bricks.length; i++){
    
    // Recalculate container_width when resize and redistribute columns
    container_width = container!.offsetWidth
    cols = Math.floor(container_width / minWidth)

    const brick:HTMLElement = bricks[i] // Typescript cree que bricks[i] es un Element. bricks es HTMLCollection. 
    //Tengo que decirle que lo de dentro no son Element sino HTMLElement, pero no me deja hacer HTMLCollectionOf

    const brick_row:number = Math.floor(i/cols)
    const brick_col:number = i%cols
    const brick_width:number = 100/cols
    const gap_reduce:number = horizontal_gap*(cols-1)/cols
    if(brick_row > rows) rows = brick_row

    brick.style.position = 'absolute'
    brick.setAttribute('row', `${brick_row}`)
    brick.setAttribute('col', `${brick_col}`)

    // Horizontal positioning
    brick.style.width = `calc(${brick_width}% - ${gap_reduce}px)`
    brick.style.left = `calc(${brick_width*brick_col}% + ${horizontal_gap/cols * brick_col}px`

    // Vertical positioning: sume of the precedent bricks in the column 
    const bricks_in_col = container!.querySelectorAll(`[col='${brick_col}']`)
    let brick_column_height = 0

    for(let brick_in_col of bricks_in_col){
      if(Number(brick_in_col.getAttribute('row')) > brick_row) continue
      brick_column_height = brick_column_height + brick_in_col.offsetHeight + vertical_gap
    }

    brick_column_height = brick_column_height - brick.offsetHeight - vertical_gap
    brick.style.top = brick_column_height + 'px'

    resizeObserver.observe(brick)
    
  }
}

// Check the size of largest column and resize the cascade container
// TODO -> Seguro que esto se puede hacer aprovechando los otros loops
function setContainerHeight(){
  let largest_col = 0
  
  for(let i=0; i<cols; i++){
    const col = container!.querySelectorAll(`[col='${i}']`)
    
    let total_height = 0
    
    for(let el of col){
      let row = el.getAttribute('row')
      let additional_gap = row < rows ? vertical_gap : 0
      total_height = total_height + el.offsetHeight + additional_gap
    }

    if(total_height > largest_col) largest_col = total_height
  }

  container!.style.height = largest_col+'px'
}