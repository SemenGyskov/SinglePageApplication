import React from "react";
import { useState } from "react";

function Registration(){

    return(
        <div>
            <form>
            <h1>Регистрация</h1>
            <input placeholder="Введите ваше имя"></input>
            <input type='tel' placeholder="Введите ваш телефон"></input>
            <input type='password'placeholder="Введите пароль"></input>
            <input type='password' placeholder="Подтвердите пароль"></input>
            <button>Зарегистрироваться </button>
            </form>
        </div>
    )
}
export default Registration;