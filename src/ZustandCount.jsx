import React, { useState } from 'react'
import CountBox from '../component/CountBox'

const zustandCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count: {count}</h1>
      <CountBox />
    </div>
  )
}

export default zustandCount