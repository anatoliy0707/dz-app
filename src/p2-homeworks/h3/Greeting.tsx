import React from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : "" // need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error}/>
            <SuperButton red={error !== ""}  disabled={name === ""} onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>
            {/*<div className={s.errorText}>{error}</div>*/}
        </div>
    )
}

export default Greeting
