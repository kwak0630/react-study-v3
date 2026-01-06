import React from 'react'
import { useSelector } from 'react-redux';


const ReduxGrandSonBox = () => {

  let count = useSelector(state => state.count)
  return (
    <div>ReduxGrandSonBox : {count} </div>
  )
}

export default ReduxGrandSonBox