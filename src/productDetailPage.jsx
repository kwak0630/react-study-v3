import React from 'react'
import { useParams } from 'react-router-dom'

const productDetailPage = () =>{

  // const params = useParams();
  // console.log(params) //현재 아이디 키 값 나옴
  
  const {id} = useParams();

  return (
    <div>productDetailPage {id}</div>
  )
}

export default productDetailPage