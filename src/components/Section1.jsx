import React from "react";
import  './Figma.css';
import one from '../Image/1.png'
import two from '../Image/2.png'
import t from '../Image/3.png'
import f from '../Image/4.png'
import five from '../Image/5.png'
import s from '../Image/6.png'
import seven from '../Image/7.png'
import e from '../Image/8.png'

const Section1=()=>{

    return(
        <>
        <div className="section1">
            <div className="grid">
            <div><img src={one} alt="" /></div>
            <div><img src={two} alt="" /></div>
            <div><img src={t} alt="" /></div>
            <div><img src={f} alt="" /></div>
            <div><img src={five} alt="" /></div>
            <div><img src={s} alt="" /></div>
            <div><img src={seven} alt="" /></div>
            <div><img src={e} alt="" /></div>
            </div>

        </div>

        </>
    )
}
export default Section1