import styles from "/styles/AnimatedText.module.css";
import { motion } from "framer-motion";
import { FC } from "react";

export const AnimatedText: FC<{
  children: string;
  delay?: number;
  interval?: number;
}> = ({ children, delay = 0, interval = 0.01 }) => {
  return (
    <>
      {Array.from(children).map((char, idx) => (
        <motion.span
          className={styles.letter}
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + interval * (idx + 1) }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
