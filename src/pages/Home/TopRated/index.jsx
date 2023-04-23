import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import ContentWrapper from "../../../components/ContentWrapper";
import CarouselHeading from "../../../components/CarouselHeading";
import CarouselContent from "../../../components/CarouselContent";

const TopRated = () => {
  const activeTab = useSelector((state) => state.home.activeTab.tvOrMovie);
  const { data, isLoading, error } = useFetch(`/${activeTab}/top_rated`);
  return (
    <ContentWrapper>
      <CarouselHeading showSwitch={true} data={["movies", "TV Shows"]}>
        Top Rated
      </CarouselHeading>
      <CarouselContent data={data} isloading={isLoading} />
    </ContentWrapper>
  );
};

export default TopRated;
