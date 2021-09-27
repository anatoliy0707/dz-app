import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: MessagePropsType) {
    return (
        <div className={style.messageWrapper}>
            <div className={style.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={style.triangle}></div>
            <div className={style.messageContainer}>
                <div className={style.userName}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
