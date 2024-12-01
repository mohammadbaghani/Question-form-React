import React, { useState, useEffect } from "react";
import "./Form.css";
import Header from './Header';
export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [userName, setUserName] = useState('حساب کاربری')
    const registerHandler = event => {
        setFirstName(event.target.value)
        event.preventDefault()
        let userInfo = {
            firstName,
            lastName
        }
        fetch('https://englisho-data-base-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))
    }
    function user() {
        setUserName(firstName)

    }
    return (<>
    <div className="z-head">
      <Header my={userName}  />
    </div>
  
        <div className="register-body"  >
            <li className='moshakhasat  title-info'>
                فرم ثبت نام
            </li>
            <li className='moshakhasat'>
                نام و نام خانوادگی خود را وارد نمایید
            </li>

            <div className="form-container">
                <form className="register-form" autoComplete="on" onSubmit={registerHandler}>     <span className="dw">
                    نام کاربری
                </span>
                    <input
                        id="first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-field"
                        type="text"
                        placeholder="مثال : محمد باغانی"
                        name="firstName" />
                    <span className="dw">
                        رمز عبور
                    </span>
                    <input
                        id="last-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="form-field"
                        type="password"
                        placeholder="مثال : 123456" />

                    <button variant="outline-primary" className="form-enter" type="submit" onClick={user}  >      ثبت نام</button>
                </form>
            </div>



        </div >
    </>
    )
}