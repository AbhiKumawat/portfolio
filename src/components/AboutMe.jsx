import React from "react"
import 'animate.css';
// import ppf from "../ppf.jpg";
const AboutMe = () => {
    return (
        <>
            <div className="scroll">
                <div className="productSpecifications">
                    <h1 className="animate__animated animate__fadeIn">About Me</h1>
                </div> 
                <div className="para-text card-bg">
                    
                    {/* <img style={{width: "25%"}} src={ppf} alt="profile"/> */}

                    <p className="aboutMe">
                        I'm Abhi, a software engineer based in NJ.
            
                        I studied Computer Science & Engineering Technology from New Jersey Institute of Technology (B.S),
                        Currently working at ADP as a Software Engineer. I have about 4 years of work experience in next gen technologies.
                        Here are a few technologies I've been working with recently:
                        <br/>
                        <br/>React & Angular
                        <br/>Figma
                        <br/>HTML & CSS / SCSS
                        <br/>Node JS
                        <br/>AWS Lambdas & Step Functions
                    </p>
                </div>

            </div>
        </>
    )
}

export default AboutMe