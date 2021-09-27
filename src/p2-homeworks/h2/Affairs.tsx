import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (string: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilterHandler = (filterValue: FilterType) => {
        props.setFilter(filterValue)
    }

    // const setAll = () => {
    //     props.setFilter("all")
    // } // need to fix
    // const setHigh = () => {
    //     props.setFilter("high")
    // }
    // const setMiddle = () => {
    //     props.setFilter("middle")
    // }
    // const setLow = () => {
    //     props.setFilter("low")
    // }

    return (
        <div className={style.someClass}>
            {mappedAffairs}
            <div className={style.filterBtn}>
                <SuperButton onClick={()=>{setFilterHandler("all")}}>All</SuperButton>
                <SuperButton onClick={()=>{setFilterHandler("high")}}>High</SuperButton>
                <SuperButton onClick={()=>{setFilterHandler("middle")}}>Middle</SuperButton>
                <SuperButton onClick={()=>{setFilterHandler("low")}}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
