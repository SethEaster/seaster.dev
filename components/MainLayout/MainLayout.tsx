import classNames from "classnames";
import React, { FC } from "react";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <main className={styles.main}>{children}</main>;
};
