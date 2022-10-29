import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "components/MainLayout/MainLayout";
import { PortfolioItem } from "components/PortfolioItem/PortfolioItem";
import styles from "styles/Portfolio.module.css";

const Portfolio: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Portfolio | Seth Easter</title>
      </Head>

      <div className={styles.content}>
        <h1 className={styles.title}>Here you can view some of my projects:</h1>
        <Link href="/" className={styles.back}>
          Back to main page
        </Link>
        <div className={styles.items}>
          <PortfolioItem
            name="Nextit"
            description="An alternative web-client for Reddit. Build with Next.js."
            image="/portfolio/Nextit.png"
            url="https://nextit.seaster.dev/"
            repository="https://github.com/SethEaster/nextit"
          />
          <PortfolioItem
            name="seaster.dev"
            description="My personal website, with all of my relevant links."
            image="/portfolio/Website.png"
            url="https://seaster.dev/"
            repository="https://github.com/SethEaster/seaster.dev"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
