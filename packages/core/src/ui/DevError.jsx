import Error from "./Error";
import React from "react";

export default ({error}) => (
  (
    (error.networkError && (
      <Error msg={`${error.networkError.response.url}: ${error.networkError.response.status}`}/>
    ))
    ||
    (error.graphQLErrors && (
      error.graphQLErrors.map(({message}, _) => (
        <Error msg={message}/>
      ))))
    ||
    <Error msg={error}/>
  )
)