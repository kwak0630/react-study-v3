import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ item }) => {
  // console.log(item.img)

  const navigate = useNavigate();

  const goToProductDatail = () => {
    navigate(`/Product/${item.id}`) // 상품 디테일 페이지로 이동
  }
  return (
    <div className='product-item' onClick={goToProductDatail}>
      <div className='img'>
        <img src={item?.img} />
      </div>
      <div className='cont'>
        {item?.choice && <p className="choice">CHOICE</p>}
        <p className='title'>{item?.title}</p>
        <p className='price'>{item?.price}</p>
        <p>
          {item?.new && <span className="new">NEW</span>}
        </p>
      </div>
    </div>
  )
}

export default ProductItem