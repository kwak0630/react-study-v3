import React, { useState } from 'react'
import CountBox from './component/CountBox'
import counterStore from './stores/counterStore'

const zustandCount = () => {
  // const [count, setCount] = useState(0);
  const {count, increase, increaseBy, decreaase} = counterStore();

  return (
    <div className='zustand-wrap'>
      <h1>count: {count}</h1>
      <button onClick={increase}>1씩 증가 +</button>
      <button onClick={() => increaseBy(10)}>10씩 증가 +</button>
      <button onClick={decreaase}>1씩 감소 -</button>
      <CountBox />
    </div>
  )
}

export default zustandCount