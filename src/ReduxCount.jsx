import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReduxCount = () => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT"})
  }
  const decreaase = () => {
    dispatch({ type: "DECREMENT"})
  }

  return (
    <div className='zustand-wrap'>
      <h1>count: {count}</h1>
      <button onClick={increase}>1씩 증가 +</button>
      <button onClick={decreaase}>1씩 감소 -</button>
    </div>
  )
}

export default ReduxCount