import React, { ReactElement } from "react";
import noImgAvail from "../../sample/noImgAvail.jpg";
interface Props {
  data: Array<any>;
}

export default function SearchResults({ data }: Props): ReactElement {
  return (
    <>
      {data.map(item => (
        <Item item={item} />
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
    <div>
      <img
        src={linkToImg}
        alt="img_src"
        style={{ maxWidth: "266px", maxHeight: "259px" }}
      />
      {/* <img src= alt="img_src" /> */}
      {/* <div>{JSON.stringify(item)}</div> */}
    </div>
  );
}
