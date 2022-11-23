import React from "react"
import './card.scss';

const Card = () => {
    return (
        <div className="wrapper">
            <div className="overviewInfo">
                
                <div className="productinfo">
                <div className="grouptext">
                    <h3>PLATFORM</h3>
                    <p>PS5</p>
                </div>
                <div className="grouptext">
                    <h3>RELEASE</h3>
                    <p>Fall 2020</p>
                </div>
                <div className="grouptext">
                    <h3>PRICE</h3>
                    <p>$50</p>
                </div>
                
                
                <div className="productImage">
                    <img src="https://i.imgur.com/ckSgzLQ.png" alt=""/>
                </div>
                
            </div>
                
            </div> 
    
            <div className="productSpecifications">
                <h1> Dual Sense </h1>
                <p> DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset... </p>
                
                {/* <div className="productFeatures">
                <div className="feature">
                    <div className="featureIcon">
                    </div>
                    <div className="featureText">
                    <p> <strong>Futuristic</strong></p>
                    <p>Design</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureIcon">
                    </div>
                    <div className="featureText">
                    <p> <strong>Built-in</strong></p>
                    <p>Microphone</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureIcon">
                    </div>
                    <div className="featureText">
                    <p> <strong>Haptic</strong></p>
                    <p>Feedback</p>
                    </div>
                    </div>
                <div className="feature">
                    <div className="featureIcon">
                    </div>
                    <div className="featureText">
                    <p> <strong>Fast charge</strong></p>
                    <p>USB-C port</p>
                    </div>
                </div>
                </div> */}
                
                <div className="checkoutButton">
                    <button className="preorder">
                        <p>Read More</p>
                    </button> 
                </div>
            </div>  
        </div>
    )
}
export default Card