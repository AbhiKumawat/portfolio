import React from "react"
import 'animate.css';
import resume from "../Resume_2023.png";
const Resume = () => {
    return (
        <>
            <div className="scroll center">
                <img style={{height: "100%"}} className="animate__animated animate__fadeIn" src={resume} alt="" />
            </div>
        </>
    )
}

export default Resume