import React from 'react'

function Text(props) {
    let x = props.fruits;
  return (
    <div>
 <h1 className='fruits'>{x}</h1>
    </div>
  )
}

export default Text