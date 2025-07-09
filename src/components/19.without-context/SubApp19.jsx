import React from 'react'
import SubSubApp19 from'./SubSubApp19'

export default function SubApp19({name}) {
  return (
    <>
    <div className='bgl-gren plr-5 ptb-2 br-2'>
      i'm from ( Sub App 19 ) , username: {name}
    </div>
      <SubSubApp19 name={name} />
    </>
  )
}