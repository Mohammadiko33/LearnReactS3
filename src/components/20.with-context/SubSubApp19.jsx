import React, { useContext } from 'react'
import SubSubSubApp19 from'./SubSubSubApp19';
import { Name } from './Context';

export default function SubSubApp19({name}) {

  const myName = useContext(Name)
  
  return (
    <>
    <div className='bgl-yell plr-5 ptb-2 br-2'>
      i'm from ( Sub Sub App 19 ) , username: {myName}
    </div>
      <SubSubSubApp19/>
    </>
  )
}