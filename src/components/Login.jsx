import React from "react";
import { useState } from "react";

function Login(){

    return(
        <div>
            <h1>Вход</h1>
            <form>
            <input placeholder="Введите ваш телефон"></input>
            <input type='password' placeholder="Введите ваш пароль"></input>
            </form>
        </div>
    )
}

export default Login;