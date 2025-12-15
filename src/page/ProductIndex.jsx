import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../componet/ProductNavigation'
import ProductItem from '../componet/ProductItem'
import { useSearchParams } from 'react-router-dom';

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

const ProductIndex = ({ authenticate, setAuthenticate }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    // 기본 데이터 가져오는 방법
    // let url = `http://localhost:4000/products`
    // let response = await fetch(url)
    // let data = await response.json();
    // setProductList(data); // 데이터 넣기
    // console.log(data)

    // 검색한 쿼리값까지 가져오는 방법
    let searchQuery = query.get('q') || ""; 
    // console.log(searchQuery);
    // let url = `http://localhost:4000/products/?q=${searchQuery}`
    let url = `https://my-json-server.typicode.com/kwak0630/react-study-v3/products/?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data); // 데이터 넣기
  }

  // 데이터를 가져올 때는 useEffect! 맨 처음에 딱 한번만 호출 되는데 검색할때마다 다시 호출 시켜야함.

  useEffect(() => {
    getProducts();
  }, [query])

  return (
    <div className='shop-wrap'>
      <NavigationBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
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