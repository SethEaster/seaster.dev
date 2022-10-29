import Link from "next/link";
import { FC } from "react";
import styles from "./PortfolioItem.module.css";

type PortfolioItemProps = {
  name: string;
  description: string;
  image: string;
  url?: string;
  repository?: string;
};

export const PortfolioItem: FC<PortfolioItemProps> = ({
  name,
  description,
  image,
  url,
  repository,
}) => (
  <div className={styles.item}>
    <div className={styles.name}>{name}</div>
    <div className={styles.description}>{description}</div>
    <img className={styles.image} src={image}></img>
    <div className={styles.links}>
      {url && (
        <Link
          href={url}
          className={styles.url}
          target="_blank"
          rel="noreferrer"
        >
          View
        </Link>
      )}
      {repository && (
        <Link
          href={repository}
          className={styles.url}
          target="_blank"
          rel="noreferrer"
        >
          Source
        </Link>
      )}
    </div>
  </div>
);
