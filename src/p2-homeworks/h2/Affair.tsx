import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.content}>
            <div className={style.contentItemName}>
                <span>{props.affair.name}</span>
            </div>
            <div className={style[props.affair.priority]}>
                <span>[{props.affair.priority}]</span>
            </div>
            <div className={style.contentItemBtn}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
