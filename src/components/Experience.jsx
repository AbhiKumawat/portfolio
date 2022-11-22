import React from "react"
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="scrollable">
            <h1>Experience</h1>
            <motion.div className="carousel">
                <motion.div drag="x" animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 30, 60, 240, 360],
                    }}
                    dragConstraints={{left: -1500, right: 0, top: 0, bottom: 0 }} 
                dragTransition={{ bounceStiffness: 300, bounceDamping: 8 }}
                className="inner-carousel" whileTap={{cursor: "grabbing"}}>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                    <motion.div className="item">
                        <img  src="https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Experience