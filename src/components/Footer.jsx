import React from "react";
import './Figma.css'
import logo from "../Image/Isolation_Mode.png";
import arrow from '../Image/Arrow.png'
import B1 from '../Image/Buttons.png'
import B2 from '../Image/Buttons2.png'
import B3 from '../Image/Buttons3.png'
import B4 from '../Image/Buttons4.png'
import uiwiki from '../Image/uiwiki.png'

const Footer=()=>{
 return(
    <div style={{backgroundColor: '#1B1B1B'}}>
    <div className="footer">
        <div className="logo_flex">
        <div >
            <img src={logo} alt="" />
        </div>
        <div>
            <li>Explore</li>
            <li>FAQ</li>
            <li>Pricing</li>
        </div>
        <div>
            <li>Licensing</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
        </div>
        </div>
        <div className="input_ss">
            <p>Join our monthly newsletter 🙌</p>
            <div className="input_m">
                <input type="text"  placeholder="designer@example.com"/>
                <img src={arrow} alt="" />
            </div>
            <p>Connect with us 🤝</p>
            <div className="img_section">
                <img src={B1} alt="" />
                <img src={B2} alt="" />
                <img src={B3} alt="" />
                <img src={B4} alt="" />
            </div>
        </div>
        
    </div>
    <div className="info">© 2024, Omega Orion Pvt. Ltd.</div>
    <div className="image"><img src={uiwiki} alt="" /></div>
    </div>
 )
}
export default Footer