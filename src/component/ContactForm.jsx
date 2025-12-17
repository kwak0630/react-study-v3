import { useState } from "react"
import usePhoneBookStore from '../stores/usePhoneBookStore'

const ContactForm = ({ onClose }) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    // 연락처 추가
    if (name.trim() === '' || phoneNumber.trim() === '') return;
    addContact(name, phoneNumber)
    setName('')
    setPhoneNumber('')

    // 자동으로 모달 닫기!!!
    if (typeof onClose === 'function') onClose()
  }

  return (
    <div className='contact-form'>
      <div className="form-item">
        <input type="text" id="name" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="phone" id="phone" placeholder="전화번호" value={phoneNumber} maxLength={11} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <button className="btn-type" onClick={handleAddContact}>추가</button>
    </div>
  )
}

export default ContactForm