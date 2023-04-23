import React from "react";
import classnames from "classnames/bind";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./CircleRating.scss";

const cx = classnames.bind(styles);

const CircleRating = (props) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={props.rating}
        maxValue={10}
        text={props.rating}
        styles={buildStyles({
          pathColor:
            props.rating < 5 ? "red" : props.rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
