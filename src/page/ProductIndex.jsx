import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../componet/ProductNavigation'
import ProductItem from '../componet/ProductItem'

// 쇼핑몰
// 1. 전체 인덱스 페이지, 상품 상세 페이지, 로그인 페이지
// 1-1. 헤더 / 네비게이션바 / 로그인 / 검색 고정
// 2. 전체 페이지에서는 전체 상품 보임
// 3. 로그인 버튼 클릭 시 로그인 페이지 이동
// 4. 상품 상세 페이지를 클릭 시 로그인이 안 되어있을 경우에 로그인 페이지 이동
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지로 이동
// 6. 로그아웃 버튼 클릭 시 로그아웃 됨
// 7. 로그아웃이 되면 상품 상세 페이지에서 벗어나서 다시 로그인 페이지로 이동
// 8. 로그인 / 로그아웃 버튼 텍스트 변경
// 9. 상품 검색 기능

const ProductIndex = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:4000/products`
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data); // 데이터 넣기
    // console.log(data)
  }

  // 데이터를 가져올 때는 useEffect!
  useEffect(() => {
    getProducts();
  },[])
  return (
    <div className='shop-wrap'>
      <NavigationBar />
      <div className='product-wrap'>
        <div className='product-list'>
          <ul>
            <li>
              <Container>
                <Row>
                  {productList.map((menu, index) => (
                    <Col lg={3}>
                      <ProductItem item={menu} key={index} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductIndex