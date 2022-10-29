import { Roboto_Condensed } from "@next/font/google";
import classNames from "classnames";
import React, { FC } from "react";
import styles from "./MainLayout.module.css";

const roboto = Roboto_Condensed({ weight: "400" });

export const MainLayout: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className={classNames(styles.main, roboto.className)}>
      {children}
    </main>
  );
};
