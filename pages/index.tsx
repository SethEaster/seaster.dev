import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { FC } from "react";
import styles from "../styles/Home.module.css";
import classnames from "classnames";
import { AnimatedText } from "../components/AnimatedText";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seth Easter</title>
        <meta name="description" content="Seth Easter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main className={styles.main}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.left}>
            <h1 className={styles.title}>
              <AnimatedText>Hey! 👋</AnimatedText>
            </h1>

            <h1 className={styles.title}>
              <AnimatedText delay={0.5}>I&apos;m Seth Easter,</AnimatedText>
            </h1>
            <h2 className={styles.description}>
              <AnimatedText delay={1}>
                a full-stack web developer from Austin, TX
              </AnimatedText>
            </h2>
          </div>
          <div className={styles.right}>
            <motion.div
              className={styles.links}
              initial={{ opacity: 0, scaleX: 0.75 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <a
                className={styles.link}
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkIcon}>📃</span> View my resume
              </a>
              <a
                className={styles.link}
                href="https://github.com/SethEaster"
                target="_blank"
                rel="noreferrer"
              >
                <span className={classnames(styles.linkIcon, styles.inverted)}>
                  <img src="/github.svg"></img>
                </span>
                Check out my GitHub
              </a>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/seth-easter-986985254/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.linkIcon} data-invert>
                  <img src="/linkedin.png"></img>
                </span>
                Find me on LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Home;
