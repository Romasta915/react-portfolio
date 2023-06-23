import './TextAppearance.scss'

import React from "react";
import { motion } from "framer-motion";

const TextAppearance = ({ text, delayOneChar }) => {



    return (
        <div>
            {
                text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * delayOneChar }} // Затримка для кожного символу
                    >
                        {char}
                    </motion.span>
                ))
            }
        </div>
    );
};

export default TextAppearance;
