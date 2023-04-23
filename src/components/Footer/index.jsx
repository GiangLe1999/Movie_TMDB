import React from "react";
import classNames from "classnames/bind";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../ContentWrapper";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <ContentWrapper>
        <ul className={cx("menuItems")}>
          <li className={cx("menuItem")}>Terms Of Use</li>
          <li className={cx("menuItem")}>Privacy-Policy</li>
          <li className={cx("menuItem")}>About</li>
          <li className={cx("menuItem")}>Blog</li>
          <li className={cx("menuItem")}>FAQ</li>
        </ul>
        <div className={cx("infoText")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className={cx("socialIcons")}>
          <span className={cx("icon")}>
            <FaFacebookF />
          </span>
          <span className={cx("icon")}>
            <FaInstagram />
          </span>
          <span className={cx("icon")}>
            <FaTwitter />
          </span>
          <span className={cx("icon")}>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
