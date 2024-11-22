import React from "react";
import './Figma.css'
import frame from '../Image/Frame_1171275630.png'
 
const Section3=()=>{
 
    return(
        <>
        <div className="section3">
            <p>Comments</p>
            <div className="Profile">
                <div>
                    <img src={frame} alt="" />
                </div>
                <div><p>Kristie Robson</p>
                <p>Gave feedback on 17th Sept 2024</p></div>
                </div>
                <p className="com">The template I bought looked great in the preview, but the actual file was poorly designed and hard to customize. Definitely not worth the price</p>
                <div className="input">
              <input type="text"  
              placeholder="Drop a comment be helpful"/>
              <button>Submit</button>
              </div>
        </div>
        
        </>
    )
} 
export default Section3