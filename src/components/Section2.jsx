import React from "react";
import './Figma.css'
import check from '../Image/check_circle.png'
import  figma from '../Image/figma.png'
import  down from '../Image/download.png'

const Section2=()=>{
    
    return(
        <>
        <div className="section2">
            <div className="flex">
                <div>
                    <div>Description</div>
                    <br />
                    <br />
                    <br />

            <p>Hello Friends 👋🏻</p>
            <br />
                <br />
            <p>Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. Your path to a better you has never been this straightforward!</p>
                <br />
                <br />
                <p>I also want to share my exploration of our app's features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful.Feel free to comment!</p>
            <br />

            <br />
            <p>🔥 Checkout our other product - https://ui8.net/omega-orion/products/forgo---quit-smoking-app✉️</p>

                </div>
                <div>
                    <div>Features</div>
                    <br />
                    <br />
                    <br />
                    <p><img src={check} alt="" /> 120+ Screens</p>
                    <br />
                  
                    <p><img src={check} alt="" /> Fully customisable designs</p>
                    <br />
                    
                    <p><img src={check} alt="" /> Organised Design system</p>
                    <br />
                    
                    <p><img src={check} alt="" /> Light & Dark mode</p>
                    <br />
                   
                    <p><img src={check} alt="" /> Customised Illustration</p>
                    <br />
                    
                    <p><img src={check} alt="" /> Neatly Organised layer</p>
                    <br />
                    <br />
                    <div>Format</div>
                    <br />
                    <p className="down"><img src={figma} alt="" /> <img src={down} alt="" /><span>15.2mb</span></p>
                </div>
            </div>

        </div>

        </>
    )

}
export default Section2