import React, { ReactElement } from "react";
import noImgAvail from "../../sample/noImgAvail.jpg";
import { Link } from "react-router-dom";
export interface Props {
  data: Array<any>;
}

export default function SearchResults({ data }: Props): ReactElement {
  return (
    <>
      {data.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </>
  );
}

interface ItemProps {
  item: any;
}

function Item({ item }: ItemProps): ReactElement {
  const linkToImg =
    item.img === null
      ? noImgAvail
      : `https://image.tmdb.org/t/p/w500/${item.img}`;

  return (
    <Link to={`/Details/${item.id}`}>
      <div key={item.id}>
        <img
          src={linkToImg}
          alt="img_src"
          style={{ maxWidth: "266px", maxHeight: "259px" }}
        />
        <h2>
          {item.title}
          {item.type}
        </h2>
      </div>
    </Link>
  );
}
