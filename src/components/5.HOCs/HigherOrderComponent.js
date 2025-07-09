import React, { useState } from 'react'

export default function HigherOrderComponent(DefualtComponent) {
const NewComponent = () => {
  const [isShow , setShow] = useState(false)

  const toggleHandler = () => {
    setShow(prevShow => !prevShow)
  }

  return <DefualtComponent isShow={isShow} toggleHandler={toggleHandler}/>
}

return NewComponent
}
