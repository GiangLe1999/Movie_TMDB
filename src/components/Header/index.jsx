import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import classnames from "classnames/bind";

import styles from "./Header.module.scss";
import ContentWrapper from "../../components/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import { useEffect } from "react";

const cx = classnames.bind(styles);

const Header = () => {
  const [headerIsVisible, setHeaderIsVisible] = useState("top");
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenuIsOpen) {
        setHeaderIsVisible("hide");
      } else {
        setHeaderIsVisible("show");
      }
      setLastScrollY(window.scrollY);
    } else {
      setHeaderIsVisible("top");
    }
  };

  const openSearchHandler = () => {
    setSearchIsOpen(true);
    setMobileMenuIsOpen(false);
  };

  const openMobileMenuHandler = () => {
    setMobileMenuIsOpen(true);
    setSearchIsOpen(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setSearchIsOpen(false);
      }, 1000);
    }
  };

  return (
    <header
      className={`${cx("header")} ${
        mobileMenuIsOpen ? cx("mobileView") : ""
      } ${cx(headerIsVisible)}`}
    >
      <ContentWrapper>
        <div className={cx("contentWrapper")}>
          <div className={cx("logo")}>
            <Link to="/">
              <img src={logo} alt="Logo Movix" />
            </Link>
          </div>
          <ul className={cx("menuItems")}>
            <li
              onClick={() => setMobileMenuIsOpen(false)}
              className={cx("menuItem")}
            >
              <NavLink to="/explore/movie">Movies</NavLink>
            </li>
            <li
              onClick={() => setMobileMenuIsOpen(false)}
              className={cx("menuItem")}
            >
              <NavLink to="/explore/tv">TV Show</NavLink>
            </li>
            <li className={cx("menuItem")}>
              <NavLink>
                <HiOutlineSearch onClick={openSearchHandler} />
              </NavLink>
            </li>
          </ul>

          <div className={cx("mobileMenuItems")}>
            <HiOutlineSearch onClick={openSearchHandler} />
            {mobileMenuIsOpen ? (
              <VscChromeClose onClick={() => setMobileMenuIsOpen(false)} />
            ) : (
              <SlMenu onClick={openMobileMenuHandler} />
            )}
          </div>
        </div>
      </ContentWrapper>
      {searchIsOpen && (
        <div className={cx("searchBar")}>
          <ContentWrapper>
            <div className={cx("searchInput")}>
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setSearchIsOpen(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
