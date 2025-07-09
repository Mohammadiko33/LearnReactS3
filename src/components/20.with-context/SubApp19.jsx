import React, { useContext } from 'react'
import SubSubApp19 from'./SubSubApp19'
import { Name } from './Context'

export default function SubApp19() {

  const myName = useContext(Name)

  return (
    <>
    <div className='bgl-gren plr-5 ptb-2 br-2'>
      i'm from ( Sub App 19 ) , username: {myName}
    </div>
      <SubSubApp19 /> 
    </>
  )
}