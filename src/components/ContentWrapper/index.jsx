import React from "react";

import styles from "./ContentWrapper.module.scss";

const ContentWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ContentWrapper;
