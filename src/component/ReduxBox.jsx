import React from 'react'
import { useSelector } from 'react-redux';
import ReduxGrandSonBox from './ReduxGrandSonBox';

const ReduxBox = () => {

  let count = useSelector(state => state.count)
  return (
    <div>ReduxBox : {count}

    <ReduxGrandSonBox />
    </div>
  )
}

export default ReduxBox