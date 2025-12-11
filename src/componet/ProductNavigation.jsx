import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import logoImg from '../assets/sally.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ShopNavigation = () => {

  const gnbList = ['여성', '남성', '아동', '홈', '세일', '베스트'];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
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
            <input type="text" placeholder='검색어를 입력하세요.'/>
          </div>
        </div>
        <div className='util'>
          {/* <Link to="/Login"><FontAwesomeIcon icon={faUser}/></Link> */}
          <button onClick={goToLogin}><FontAwesomeIcon icon={faUser}/></button>
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