import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/ContentWrapper";
import CarouselHeading from "../../../components/CarouselHeading";
import CarouselContent from "../../../components/CarouselContent";

const Trending = () => {
  const activeTab = useSelector((state) => state.home.activeTab.trending);
  const { data, isLoading, error } = useFetch(`/trending/all/${activeTab}`);

  return (
    <ContentWrapper>
      <CarouselHeading showSwitch={true} data={["day", "week"]}>
        Trending
      </CarouselHeading>
      <CarouselContent data={data} isLoading={isLoading} />
    </ContentWrapper>
  );
};

export default Trending;
