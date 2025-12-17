import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactList = () => {

  const { phoneBook } = usePhoneBookStore();
  console.log(phoneBook)
  return (
    <div className='contact-list'>
    
      <div className='search'>
        <div className='search-input'>
          <input type="text" placeholder='검색어를 입력하세요.' onKeyDown={(event) => search(event)}/>
          <SearchIcon />
        </div>
      </div>
      <div className='list-wrap'>
        <div className='top-box'>
          <span className='count'>총 {phoneBook?.length ?? 0} 명</span>
        </div>
        <ul className='list-box'>
          {phoneBook.map((item) => 
            <li key={item.id} className='list-item'>
              <span className='name'>{item.name}</span>
              <span>{item.phoneNumber}</span>
            </li>
          )}


          {phoneBook.length === 0 && <li className='nodata'>연락처 목록이 없습니다.</li>}
        </ul>
      </div>
    </div>
  )
}

export default ContactList