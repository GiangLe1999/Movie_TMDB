import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./HeroBanner.module.scss";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/ContentWrapper";
import Img from "../../../components/LazyLoadImage/Img";

const cx = classNames.bind(styles);

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const { data, isLoading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const backgroundPath =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(backgroundPath);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const searchQueryByClickHandler = (e) => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className={cx("heroBanner")}>
      {!isLoading && (
        <div className={cx("backdropImage")}>
          <Img src={background} />
        </div>
      )}

      <div className={cx("opacityLayer")}></div>

      <ContentWrapper>
        <div className={cx("content")}>
          <span className={cx("title")}>Welcome</span>
          <span className={cx("subTitle")}>
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className={cx("searchInput")}>
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchQueryByClickHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
