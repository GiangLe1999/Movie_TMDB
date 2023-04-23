import React from "react";
import classNames from "classnames/bind";

import styles from "../SwitchTabs/SwitchTabs.module.scss";
import ContentWrapper from "../ContentWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchTrendingTabs, switchTvOrMovieTabs } from "../../store/homeSlice";

const cx = classNames.bind(styles);

const SwitchTabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const dispatch = useDispatch();

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);

    if (tab === "week" || tab === "day") {
      dispatch(switchTrendingTabs(tab));
    }

    if (tab === "movies" || tab === "TV Shows") {
      switch (tab) {
        case "movies":
          tab = "movie";
          break;
        case "TV Shows":
          tab = "tv";
          break;
        default:
          return;
      }
      dispatch(switchTvOrMovieTabs(tab));
    }
  };

  return (
    <div className={cx("switchingTabs")}>
      <div className={cx("tabItems")}>
        {props.data.map((tab, index) => (
          <span
            className={`${cx("tabItem")} ${cx(
              selectedTab === index && "active"
            )}`}
            key={index}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <div className={cx("movingBg")} style={{ left }}></div>
      </div>
    </div>
  );
};

export default SwitchTabs;
