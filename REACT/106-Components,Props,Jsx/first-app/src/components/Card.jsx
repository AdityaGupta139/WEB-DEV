import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='Card' style={{overflow:"hidden"}}>
        <img src="https://static.vecteezy.com/system/resources/previews/024/689/019/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-virtual-tunnel-warp-made-with-digital-code-data-flow-illustration-vector.jpg" alt="" width={333} style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
