import React, { useState } from 'react'
import ContactForm from '../component/ContactForm';
import ContactList from '../component/ContactList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

const PhoneBook = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='phonebook-wrap'>
      <h1>My Contact 🤳🏻</h1>
      <div className='phonebook-box'>
        {showForm && (
          <>
            <Backdrop
              open={showForm}
              onClick={() => setShowForm(false)}
              sx={{ color: '#000', bgcolor: 'rgba(0,0,0,0.5)', zIndex: (theme) => theme.zIndex.modal }}
            />
            <Box sx={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: (theme) => theme.zIndex.modal + 1 }}>
              <ContactForm onClose={() => setShowForm(false)} />
            </Box>
          </>
        )}
        <ContactList />

        <Fab
          className='btn-add'
          onClick={() => setShowForm(prev => !prev)}
          sx={{
            bgcolor: '#ffc107',
            color: '#fff',
            '&:hover': { bgcolor: '#fd7e14' }
          }}
          aria-label="toggle-form"
        >
          {showForm === true ? <ClearIcon />  : <AddIcon />}
        </Fab>
      </div>
    </div>
  )
}

export default PhoneBook