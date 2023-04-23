import React from "react";
import classNames from "classnames/bind";

import styles from "./CarouselHeading.module.scss";
import ContentWrapper from "../ContentWrapper";
import SwitchTabs from "../SwitchTabs";

const cx = classNames.bind(styles);

const CarouselHeading = (props) => {
  return (
    <div className={cx("carouselHeading")}>
      <ContentWrapper>
        <h2 className={cx("title")}>{props.children}</h2>
        {props.showSwitch && <SwitchTabs data={props.data} />}
      </ContentWrapper>
    </div>
  );
};

export default CarouselHeading;
