import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import ContentWrapper from "../../../components/ContentWrapper";
import CarouselHeading from "../../../components/CarouselHeading";
import CarouselContent from "../../../components/CarouselContent";

const Popular = () => {
  const activeTab = useSelector((state) => state.home.activeTab.tvOrMovie);
  const { data, isLoading, error } = useFetch(`/${activeTab}/popular`);
  return (
    <ContentWrapper>
      <CarouselHeading showSwitch={true} data={["movies", "TV Shows"]}>
        What's Popular
      </CarouselHeading>
      <CarouselContent data={data} isloading={isLoading} />
    </ContentWrapper>
  );
};

export default Popular;
