import React, { useState } from 'react'
import SubApp19 from'./19.without-context/SubApp19'

export default function App19() {

 const [myNameIs , setMyNameIs] = useState("mohammad iKO")

  return (
    <div className='dgpc mt10 bgl-gray'>
    <div className='bgl-blue plr-5 ptb-2 br-2'>
      i'm from ( app19 ) , username: {myNameIs}
    </div>
      <SubApp19 name={myNameIs} />
    </div>
  )
}