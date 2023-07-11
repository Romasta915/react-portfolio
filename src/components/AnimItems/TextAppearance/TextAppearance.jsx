import { motion } from "framer-motion";

const TextAppearance = ({ text, delayOneChar }) => {

    return (
        <div>
            {
                text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * delayOneChar }} // Затримка для кожного символу
                        viewport={{ once: true }}
                    >
                        {char}
                    </motion.span>
                ))
            }
        </div>
    );
};

export default TextAppearance;
