import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./DetailsBanner";
import Cast from "./Cast";
import VideoSection from "./VideoSection";
import Similar from "./Carousels/Similar";
import Recommendation from "./Carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log(data);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={isLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
