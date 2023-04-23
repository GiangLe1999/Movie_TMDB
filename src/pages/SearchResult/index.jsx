import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./SearchResult.scss";

import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/ContentWrapper";
import MovieCard from "../../components/MovieCard";
import Spinner from "../../components/Spinner";
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  console.log(pageNum);
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (resData) => {
        setData(resData);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (resData) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...resData.results],
          });
        } else {
          setData(resData);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results.length > 0 ? (
            <div className="pageTitle">
              {`Search ${
                data?.total_results > 1 ? "results" : "result"
              } of ${query}`}
            </div>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
          <InfiniteScroll
            className="content"
            dataLength={data?.results.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= data?.total_pages}
            loader={<Spinner />}
          >
            {data?.results?.map((item, index) => {
              if (item?.media_type === "person") return;
              return <MovieCard key={index} data={item} fromSearch={true} />;
            })}
          </InfiniteScroll>
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
