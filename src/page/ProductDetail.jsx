import React from 'react'
import { useParams } from 'react-router-dom';

import NavigationBar from '../componet/ProductNavigation'
import { products } from '../../db.json'; // ✅ 상품 리스트 불러오기 (경로는 네 구조에 맞게)


const ProductDetail = () => {
  const params = useParams();
  // console.log(params) //현재 아이디 키 값 나옴
    
  const {id} = useParams();
  const item = products.find(p => String(p.id) === String(id)); // id로 상품 찾기

  console.log(item);

  return (
    <div className='shop-wrap'>
      <NavigationBar />
      <div className='product-wrap'>
        <div className='product-detail'>
          <div className='product-img'>
            <img src={item.img}></img>
          </div>
          <div className='product-info'>
            <p className='title'>{item.title}</p>
            <p className='price'>{item.price}</p>
            <p className='chips'>
              {item?.choice && <span className="chip">CHOICE</span>}
              {item?.new && <span className="chip">NEW</span>}
            </p>
            <div className='select-box'>
              <select>
                <option value="0">선택해주세요</option>
                {item.size.map((option, index) => (
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