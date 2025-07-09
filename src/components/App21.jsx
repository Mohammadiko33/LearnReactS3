import React from 'react'
import NameProvider from './21.refactor-context-provider/Refactor'
import SubApp21 from './21.refactor-context-provider/SubApp21'

export default function App21() {
  return (
    <NameProvider>
        <div>
         <SubApp21/>
        </div>
    </NameProvider>
  )
}
