import React from 'react'
import Login from './Login'
import { useState } from 'react'
import Registration from './Registration'

function User(){
    const [form,setForm]=useState("register")
    function changeUser(){
        if(form === 'register'){
            setForm('login')
        }else{
            setForm('register')
        }
    }
    return(
        <div>
           {form ==='login' ? <Login /> : <Registration/>} 
           <button onClick={changeUser}>Войти</button>
        </div>
    )  
}
export default User;