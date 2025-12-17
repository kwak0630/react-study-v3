import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactList = () => {

  const { phoneBook, removeContact, removeAllContact } = usePhoneBookStore();
  console.log(phoneBook);

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
          <input type="text" placeholder='검색어를 입력하세요.' onKeyDown={(event) => search(event)}/>
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
          {phoneBook.map((item) => 
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