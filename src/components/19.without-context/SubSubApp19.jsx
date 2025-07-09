import React from 'react'
import SubSubSubApp19 from'./SubSubSubApp19';

export default function SubSubApp19({name}) {
  return (
    <>
    <div className='bgl-yell plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub App 19 ) , username: {name}
    </div>
      <SubSubSubApp19 name={name} />
    </>
  )
}