import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";

interface Props {}

export default function DetailsPage({}: Props): ReactElement {
  const { id } = useParams();

  return <div>{id}</div>;
}
