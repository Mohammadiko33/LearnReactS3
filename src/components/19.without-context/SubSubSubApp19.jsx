import React from 'react'
import SubSubSubSubApp19 from'./SubSubSubSubApp19'

export default function SubSubSubApp19({name}) {
  return (
    <>
    <div className='bgl-orng plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub Sub App 19 ) , username: {name}
    </div>
      <SubSubSubSubApp19 name={name} />
    </>
  )
}