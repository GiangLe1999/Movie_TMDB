import React, { useRef } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper";
import CircleRating from "../CircleRating";
import Img from "../../components/LazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import styles from "./CarouselContent.module.scss";
import "./PosterBlock.scss";
import Genres from "../Genres";
import { useSelector } from "react-redux";

const cx = classnames.bind(styles);

const CarouselContent = (props) => {
  const carouselWrapper = useRef();
  const { url } = useSelector((state) => state.home);
  const type = useSelector((state) => state.home.activeTab.tvOrMovie);
  const navigation = (dir) => {
    const container = carouselWrapper.current;
    console.log(container.scrollLeft);
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behaviour: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className={cx("skeletonItem")}>
        <div className="posterBlock skeleton">
          <div className={cx("textBlock")}>
            <div className={`${cx("title")} skeleton`}></div>
            <div className={`${cx("date")} skeleton`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={cx("wrapper")}>
      <BsFillArrowLeftCircleFill
        className={`${cx("carouselLeftNav")} ${cx("arrow")}`}
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className={`${cx("carouselRightNav")} ${cx("arrow")}`}
        onClick={() => navigation("right")}
      />
      {!props.isLoading ? (
        <div className={cx("carouselItems")} ref={carouselWrapper}>
          {props.data?.results.map((item) => {
            const posterUrl = item.poster_path
              ? url.poster + item.poster_path
              : PosterFallback;
            return (
              <Link
                to={`/${item.media_type || type}/${item.id}`}
                key={item.id}
                className={cx("carouselItem")}
              >
                <div className="posterBlock">
                  <Img src={posterUrl} />
                  <CircleRating rating={item.vote_average.toFixed(1)} />
                  <Genres data={item.genre_ids.slice(0, 2)} />
                </div>
                <div className={cx("textBlock")}>
                  <span className={cx("title")}>{item.title || item.name}</span>
                  <span className={cx("date")}>
                    {dayjs(item.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={cx("loadingSkeleton")}>
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      )}
    </div>
  );
};

export default CarouselContent;
