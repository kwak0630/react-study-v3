import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavigationBar from '../componet/ProductNavigation'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div className='shop-wrap'>
      <NavigationBar />
      <div className='product-wrap'>
        <div className='product-detail'>
          <div className='product-img'>
            <img src={product?.img}></img>
          </div>
          <div className='product-info'>
            <p className='title'>{product?.title}</p>
            <p className='price'>{product?.price}</p>
            <p className='chips'>
              {product?.choice && <span className="chip">CHOICE</span>}
              {product?.new && <span className="chip">NEW</span>}
            </p>
            <div className='select-box'>
              <select>
                <option value="0">선택해주세요</option>
                {product?.size.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))}
              </select>
            </div>
            <div className='btn-wrap'>
              <button type='button' className='btn-type'>담기 +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail