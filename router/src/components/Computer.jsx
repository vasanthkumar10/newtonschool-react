import React from "react";
import { useParams } from "react-router-dom";

export function Computer() {
  const { id } = useParams();
  console.log(useParams());
  return <div>Computer - {id}</div>;
}
