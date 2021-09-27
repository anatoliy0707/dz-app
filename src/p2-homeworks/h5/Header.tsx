import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [toggleON, setToggleON] = useState(false)

    const callBack = () => setToggleON(!toggleON)

    return (
        <nav className={`${toggleON ? `${style.navWrapper} ${style.navWrapperActive}` : style.navWrapper}`}>
            <NavLink className={style.navLink} to='/pre-junior'>pre-junior</NavLink>
            <NavLink className={style.navLink} to='/junior'>junior</NavLink>
            <NavLink className={style.navLink} to='/junior+'>junior+</NavLink>
            <SuperButton onClick={callBack} className={style.btn}>Open</SuperButton>
        </nav>
    )
}

export default Header
