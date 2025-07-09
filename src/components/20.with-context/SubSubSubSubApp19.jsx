import React, { useContext } from 'react'
import { Name } from './Context'

export default function SubSubSubSubApp19() {

  const myName = useContext(Name)

  return (
    <>
    <div className='bgl-red plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub Sub Sub App 19 ) , username: {myName}
    </div>
    </>
  )
}
