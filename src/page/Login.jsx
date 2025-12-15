import React from 'react'
import NavigationBar from '../componet/ProductNavigation'
import { useNavigate } from 'react-router-dom'

const Login = ({ authenticate, setAuthenticate }) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    // console.log("login") //> 2. 아주 잠깐 떴다가 사라짐.. 리프레시가 됐기 때문에! > form 이 리프레시 하는 걸 막아줘야 함.
    event.preventDefault();   // 3. form에서 event를 받아와서 뿌려준다 > 리프레시 막음. ** form 을 쓸 경우 event.preventDefault() 이거 꼭 사용!
    // console.log("login2")

    // setAuthenticate(true);
    setAuthenticate?.(true);
    navigate('/Product') // main 페이지로 이동
  }
  
  return (
    <div className='shop-wrap'>
      <NavigationBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      {/* 1. form 안에 button 는 리프레시가 된다. type이 submit일 경우는 onClick 이벤트 안되고 onSubmit을 줘야함 */}
      <form onSubmit={(event) => loginUser(event)}>
        <div className='login-wrap'>
          <h2>Login</h2>
          <div className='login-box'>
            <div className='form-item'>
              <input type="text" id="id" name='id' placeholder='아이디를 입력하세요.' />
            </div>
            <div className='form-item'>
              <input type="password" id="password" name="password" placeholder='패스워드를 입력하세요.' />
            </div>
            <div className='form-item checkbox-item'>
              <input type="checkbox" id="save" name="save" />
              <label>아이디 저장</label>
            </div>
            <div className='btn-wrap'>
              <button type="submit" className='btn-type'>로그인</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login