import React from "react"
import { motion } from 'framer-motion';
import Card from "./Card";

const Experience = () => {
    return (
        <div className="scrollable">
            <h1>Experience</h1>
            <motion.div className="carousel">
                <motion.div drag="x"
                dragConstraints={{left: -1500, right: 0, top: 0, bottom: 0 }} 
                dragTransition={{ bounceStiffness: 300, bounceDamping: 8 }}
                className="inner-carousel" whileTap={{cursor: "grabbing"}}>
                    <motion.div className="item">
                        <Card />
                    </motion.div>
                    <motion.div className="item">
                        <Card />
                    </motion.div>
                    <motion.div className="item">
                        <Card />
                    </motion.div>
                    <motion.div className="item">
                        <Card />
                    </motion.div>
                    <motion.div className="item">
                        <Card />
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Experience