import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "./VideoSection.scss";

import ContentWrapper from "../../../components/ContentWrapper";
import { PlayIcon } from "../DetailsBanner/PlayButton";
import VideoPopup from "../../../components/VideoPopUp";
import Img from "../../../components/LazyLoadImage/Img";
import { useRef } from "react";

const VideosSection = ({ data, loading }) => {
  const videosRef = useRef();
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const navigation = (dir) => {
    const videos = videosRef.current;
    let scrollAmount;
    if (dir === "left") {
      scrollAmount = videos.scrollLeft - (videos.offsetWidth + 20);
    } else {
      scrollAmount = videos.scrollLeft + (videos.offsetWidth + 20);
    }
    console.log(scrollAmount);

    videos.scrollTo({
      left: scrollAmount,
      behaviour: "smooth",
    });
  };

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <>
      {data?.results.length !== 0 && (
        <div className="videosSection">
          <ContentWrapper>
            <BsFillArrowLeftCircleFill
              className="carouselLeftNav arrow"
              onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
              className="carouselRightNav arrow"
              onClick={() => navigation("right")}
            />
            <div className="sectionHeading">Official Videos</div>
            {!loading ? (
              <div className="videos" ref={videosRef}>
                {data?.results.map((video) => {
                  return (
                    <div
                      key={video.id}
                      className="videoItem"
                      onClick={() => {
                        setVideoId(video.key);
                        setShow(true);
                      }}
                    >
                      <div className="videoThumbnail">
                        <Img
                          src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                        />
                        <PlayIcon />
                      </div>
                      <div className="videoTitle">{video.name}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
              </div>
            )}
          </ContentWrapper>
          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      )}
    </>
  );
};

export default VideosSection;
