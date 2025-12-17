import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactList = () => {
  const [searchTerm, setSearchTerm] = useState('');  // 검색
  const { phoneBook, removeContact, removeAllContact } = usePhoneBookStore();
  // console.log(phoneBook);

  // 검색!!!
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  // 검색된걸로 필터화 시키기
  const filteredPhoneBook = phoneBook.filter((item) =>
    item.name.includes(searchTerm) || item.phoneNumber.includes(searchTerm)

    // 1. phoneBook.filter() → phoneBook 배열을 하나하나 체크
    // 2. item은 각각의 연락처 항목
    // 3. ....includes() 는 검색어가 포함되는지 체크
    // 4. 이름이나 전화번호가 포함되면 true / 아니면 false
    // 5. true만 골라짐!!!
  );

  // 삭제, 전체삭제
  const handleRemove = (id) => {
    removeContact(id)
  }
  const handleAllRemove = () => {
    removeAllContact()
  }
  return (
    <div className='contact-list'>
      <div className='search'>
        <div className='search-input'>
          <input 
            type="text" 
            placeholder='이름이나 전화번호를 입력하세요.' 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          <SearchIcon />
        </div>
      </div>
      <div className='list-wrap'>
        <div className='top-box'>
          <span className='count'>총 {phoneBook?.length ?? 0} 명</span>
          {phoneBook.length > 0 && 
            <button className='all-delete' onClick={() => handleAllRemove()}>
              전체삭제
              <DeleteOutlineIcon 
                sx={{ 
                  fontSize: 16, 
                  color: '#777',
                  strokeWidth: 0.2, 
                }} 
              />
            </button>
          }
        </div>
        <ul className='list-box'>
          {filteredPhoneBook.map((item) => 
            <li key={item.id} className='list-item'>
              <span className='name'>{item.name}</span>
              <div className='phone'>
                <span>{item.phoneNumber}</span>
                <button onClick={() => handleRemove(item.id)}>
                  <DeleteOutlineIcon 
                    sx={{ 
                      fontSize: 16, 
                      color: '#777',
                      strokeWidth: 0.2, 
                    }} 
                  />
                </button>
              </div>
            </li>
          )}

          {phoneBook.length === 0 && <li className='nodata'>연락처 목록이 없습니다.</li>}
        </ul>
      </div>
    </div>
  )
}

export default ContactList