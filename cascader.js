
export function cascader(element, cols){
    if(!element.id) console.error('Cascader: Container needs an id')

    const bricks = document.querySelectorAll(`#${element.id} > *`)
    let largest_col = 0

    element.style.position = 'relative'

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

    // Set container height determined by the largest col
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

// La ultima fila que se reparta de manera que equipare el espacio final? O ponerlo como opcion almenos?