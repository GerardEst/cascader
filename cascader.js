
export function cascader(element, cols){
    const bricks = element.querySelectorAll('div')
    element.style.position = 'relative'
    
    for(let i in bricks){

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