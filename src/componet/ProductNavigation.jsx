import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import logoImg from '../assets/sally.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ShopNavigation = (setAuthenticate) => {

  const gnbList = ['여성', '남성', '아동', '홈', '세일', '베스트'];

  console.log("setAuthenticate", setAuthenticate)
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  }
  const goToLogout = () => {
    navigate('/Product');
  }

  const search = (event) => {
    //onKeyPress 는 입력 하면 바로 실행 > 리액트17부터는 onKeyDown가 안정적이다

    if(event.key === "Enter") {
      // console.log("key", event.key);

      // 입력한 검색얼르 읽어와서 url 변경하기
      let keyword = event.target.value;
      // console.log(keyword)
      navigate(`/Product/?q=${keyword}`)
    }
  }
  return (
    <div className='header-wrap'>
      <div className='header-logo'>
        <h1 className='logo'>
          <Link to="/Product"><img src={logoImg} /></Link>
        </h1>
        <div className='search'>
          <div className='search-input'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='검색어를 입력하세요.' onKeyDown={(event) => search(event)}/>
          </div>
        </div>
        <div className='util'>
          {/* <Link to="/Login"><FontAwesomeIcon icon={faUser}/></Link> */}
          {

          }
          <button onClick={goToLogin}><FontAwesomeIcon icon={faUser}/>로그인</button>
          <button onClick={goToLogout}><FontAwesomeIcon icon={faUser}/>로그아웃</button>
          {/* <span>LOGIN</span> */}
        </div>
      </div>

      <div>
        <ul className="header-gnb">
          {gnbList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default ShopNavigation