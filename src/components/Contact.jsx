import React from "react"
import 'animate.css';
import ppf from "../contact_me.jpg";
const Contact = () => {
    return (
        <>
            <div className="scroll">
                <h1 className="animate__animated animate__fadeIn">Get In Touch With Me</h1>
                <div className="para-text">
                    <img style={{width: "25%"}} src={ppf} alt="profile"/>
                    <p>Name: Abhimanyu Kumawat</p>
                    <p>Gmail: abhimanyuxkumawat</p>
                    <p><a href="https://www.linkedin.com/in/abhimanyu-kumawat-37358a155/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
        </>
    )
}

export default Contact