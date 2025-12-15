import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const ContactList = () => {
  return (
    <div className='contact-list'>
      
        <div className='search'>
          <div className='search-input'>
            <input type="text" placeholder='검색어를 입력하세요.' onKeyDown={(event) => search(event)}/>
            <SearchIcon />
          </div>
        </div>
    </div>
  )
}

export default ContactList