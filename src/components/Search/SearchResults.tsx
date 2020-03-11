import React, { ReactElement } from "react";

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
  return <div>{JSON.stringify(item)}</div>;
}
