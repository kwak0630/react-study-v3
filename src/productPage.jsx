import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ProductPage = () => {

  // 쿼리 페이지 이동
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/product?q=pants')
  }

  // 쿼리에 있는 값 확인
  let [query, setQuery] = useSearchParams();
  console.log(query.get('q'));

  return (
    <div>
      
      ProductPage <br/><br/><br/>

      <button onClick={goProductPage}>go to product </button>
    </div>
  )
}

export default ProductPage