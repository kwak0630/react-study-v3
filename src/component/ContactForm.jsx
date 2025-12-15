import { useState } from "react"

const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className='contact-form'>
      <div className="form-item">
        <input type="text" id="name" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" id="phone" placeholder="전화번호" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <button className="btn-type">추가</button>
    </div>
  )
}

export default ContactForm