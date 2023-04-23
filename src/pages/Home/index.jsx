import React from "react";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import classNames from "classnames";

import styles from "./Home.module.scss";
import TopRated from "./TopRated";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("homePage")}>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
