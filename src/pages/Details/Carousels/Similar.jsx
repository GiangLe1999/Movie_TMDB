import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/ContentWrapper";
import CarouselHeading from "../../../components/CarouselHeading";
import CarouselContent from "../../../components/CarouselContent";

const Similar = ({ mediaType, id }) => {
  const { data, isLoading, error } = useFetch(`/${mediaType}/${id}/similar`);
  return (
    <>
      {data?.results?.length !== 0 && (
        <ContentWrapper>
          <CarouselHeading showSwitch={false}>
            Similar {mediaType === "tv" ? "TV Shows" : "Movies"}
          </CarouselHeading>
          <CarouselContent data={data} isloading={isLoading} />
        </ContentWrapper>
      )}
    </>
  );
};

export default Similar;
