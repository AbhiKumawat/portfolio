import React from "react"
import './card.scss';
// import contactPNG from "../contact_me.png";
const Card = () => {
    return (
        <div className="wrapper card-bg">
            <div className="productSpecifications">
                <h1 className="animate__animated animate__fadeIn">GET IN TOUCH WITH ME</h1>           
            </div>  
            <div className="overviewInfo">
                
                <div className="productinfo">
                    <div className="grouptext">
                            <h3>NAME</h3>
                            <p>Abhimanyu Kumawat</p>
                    </div>
                    <div className="grouptext">
                        <h3>EMAIL</h3>
                        <p><a href = "mailto: abhimanyuxkumawat@gmail.com">Gmail</a></p>
                    </div>
                    <div className="grouptext">
                        <h3>Graduated From</h3>
                        <p>New Jersey Institute of Technology</p>
                    </div>
                    <div className="grouptext">
                        <h3>YEARS OF EXPERIENCE</h3>
                        <p>4</p>
                    </div>
                    <div className="grouptext">
                        <h3>Location</h3>
                        <p>NJ</p>
                    </div>
                    <div className="grouptext">
                        <h3>Social</h3>
                        <p class="para-text"><a href="https://www.linkedin.com/in/abhimanyu-kumawat-37358a155/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div>    
            </div> 
        </div>
    )
}
export default Card