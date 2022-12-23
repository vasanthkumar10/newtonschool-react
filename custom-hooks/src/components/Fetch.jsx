import React from "react";
import { useFetch } from "../hooks/useFetch";

export function Fetch() {
  // api call
  const [isLoading, apiData, serverError] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  //   console.log(`loading state -> ${isLoading}`);
  //   console.log(`api data -> ${apiData}`);
  //   console.log(`error msg -> ${serverError}`);

  return (
    <div>
      <h2>API data</h2>
      {isLoading && <p>Loading.....icon</p>}
      {!isLoading && serverError && <p>Error occured</p>}
      {!isLoading && !serverError && (
        <div>
          <h2>{apiData.title}</h2>
          <p>{apiData.userId}</p>
        </div>
      )}
    </div>
  );
}
