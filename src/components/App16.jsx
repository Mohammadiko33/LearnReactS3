import React, { useId, useState } from 'react'
import { Button } from 'react-bootstrap'
// import { v4 as uuid } from 'uuid'

export default function App16() {

  const [users , setUser] = useState([
    {id: 1, name: "mohmmad",},
    {id: 2, name: "reza",},
    {id: 3, name: "amir",},
  ])


  // const [users , setUser] = useState([
  //   {id: uuidv4(), name: "mohmmad",},
  //   {id: uuidv4(), name: "reza",},
  //   {id: uuidv4(), name: "amir",},
  // ])


  return (
    <div className='dfc jcfs g1 aifs h100vh p1 bgl-pink cd-red'>{users.map(user => (
      <Button className='bgblue tshor mr1 tt' disabled key={user.id}>id : {user.id} | name: {user.name}</Button>
    ))}</div>
  )
}

// npm i uuid
// uuid برای ما یک ایدی یونیک میسازه که به ما تضمین میکنه که این ایدی منخصز به فرده  و هرچقدرم ایتم داشته باشیم این ایدی ها تکراری نمشن