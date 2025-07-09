import React, { useContext } from 'react'
import SubSubApp21 from'./SubSubApp21'
import { NameContext } from './Refactor'

export default function SubApp21() {

  const myName = useContext(NameContext)


  return (
    <>
    <div className='bgl-yell bl-bl plr-5 ptb-2 br-2'>
      i'm from ( Sub App 19 ) , username: {myName}
    </div>
      <SubSubApp21/>
    </>
  )
}