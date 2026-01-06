import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReduxBox from './component/ReduxBox';

const ReduxCount = () => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: {num : 5}}) // payload는 필요한 값! (함수의 매개변수 같은 개념)
  }
  const decreaase = () => {
    dispatch({ type: "DECREMENT"})
  }

  return (
    <div className='zustand-wrap'>
      <h1>count: {count}</h1>
      <button onClick={increase}>증가 +</button>
      <button onClick={decreaase}>감소 -</button>

      <ReduxBox />
    </div>
  )
}

export default ReduxCount