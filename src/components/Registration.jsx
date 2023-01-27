import React from "react";
import { useState } from "react";

function Registration({propName,propAge,propEmail}){
    const [name,setName]=useState(propName)
    const [age,setAge]=useState(propAge)
    const [email,setEmail]=useState(propEmail)
    const [nameValid,setNameValid]=useState(validateName(name))
    const [ageValid,setAgeValid]=useState(validateAge(age))
    const[emailValid,setEmailValid]=useState(validateEmail(email))

    function validateEmail(email){
        const regExp = /.+@.+\..+/i
        if(email.match(regExp)){
            return true
        }
    }

    function validateName(name){
        return name.length > 2
    }
    function validateAge(age){
        return +age >= 10
    }
    function onNameChange(e){
        let val = e.target.value
        let valid = validateName(val)
        setName(val)
        setNameValid(valid)
    }

    function onAgeChange(e){
        var val = e.target.value
        var valid= validateAge(val)
        setAge(val)
        setAgeValid(valid)
    }
    function onEmailChange(e){
        var val = e.target.value
        var valid = validateEmail(val)
        setEmail(val)
        setEmailValid(valid)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(nameValid === true && ageValid ===true && emailValid === true){
            alert('')
        }
    }
    let nameColor = nameValid === true ? 'green':'red'
    let ageColor = ageValid === true ? 'green': 'red'
    let emailColor = emailValid === true ? 'green':'red'
    return(
     <>
     <form onSubmit={handleSubmit}>
        <p>
            <label>Имя: </label><br/>
            <input type="text" value={name} onChange={onNameChange} style={{borderColor: nameColor}}/>
        </p>
        <p>
            <label>Email: </label><br/>
            <input type="text" value={email} onChange={onEmailChange} style={{borderColor: emailColor}} />
        </p>
        <p>
            <label>Возраст: </label><br/>
            <input type="number" value={age} onChange={onAgeChange} style={{borderColor: ageColor}}/>
        </p>
        <input type="submit" value='Отправить' />
     </form>
     </>
    )
}
export default Registration;