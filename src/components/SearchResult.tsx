import React from "react";

interface Data {
  url: string | undefined;
  original_title: string;
  poster_path: string;
  id: string;
  overview: string;
}

interface ListData {
  data: {
    results: Array<Data>;
  };
}

const SearchResult: React.FC<ListData | any> = ({ data }) => {
  if (data && data.results) {
    return data.results.map((hit: Data) => (
      <div key={hit.id}>
        <h5>{hit.original_title}</h5>
        <h6> {hit.overview}</h6>
      </div>
    ));
  } else return null;
};

export default SearchResult;
