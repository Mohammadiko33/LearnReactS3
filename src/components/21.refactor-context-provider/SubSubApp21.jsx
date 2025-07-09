import React, { useContext } from 'react'
import { NameContext } from './Refactor'

export default function SubSubApp19() {

    const myName = useContext(NameContext)

    console.log(myName)

  return (
    <>
    <div className='bgl-yell mt05 plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub App 19 ) , username: {myName}
    </div>
    </>
  )
}