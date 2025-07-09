import React, { useContext } from 'react'
import SubSubSubSubApp19 from'./SubSubSubSubApp19'
import { Name } from './Context'

export default function SubSubSubApp19() {

  const myName = useContext(Name)

  return (
    <>
    <div className='bgl-orng plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub Sub App 19 ) , username: {myName}
    </div>
      <SubSubSubSubApp19 />
    </>
  )
}