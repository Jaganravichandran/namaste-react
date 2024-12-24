import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <h2> Oops! Something we wrong</h2>
    </div>
  );
};

export default Error;
