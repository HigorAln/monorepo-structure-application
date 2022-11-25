import React from 'react'
import { sum } from '@alura/utils/math/sum'

export default function Home(){
  return(
    <main>
      <h1>Home</h1>
      <p>funcionou - 2 + 2 = {sum(2, 2)}</p>
    </main>
  )
}
