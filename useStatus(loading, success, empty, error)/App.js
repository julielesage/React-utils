import React, { useEffect } from "react";
import { render } from "react-dom";

import useStatus from "./hooks/useStatus";

import {
  LoadingState,
  ErrorState,
  EmptyState,
  Results
} from "./components/Results";

import "./style.css";

const App = () => {
  const { Status, setState } = useStatus({ status: "loading" });

  const asyncCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Comment/Uncomment the different states to see the component update
        // Success
        resolve([
          { content: "Fetched Result 1" },
          { content: "Fetched Result 2" },
          { content: "Fetched Result 3" }
        ]);
        // Empty
        // resolve([]);
        // Error
        // reject("Could not fetch results.");
      }, 3000);
    });
  };

  const handleSuccess = response =>
    setState({
      status: response.length === 0 ? "empty" : "success",
      results: response
    });

  const handleError = error => setState({ status: "error", error });

  function fetchResults() {
    setState({ status: "loading" });
    return asyncCall()
      .then(handleSuccess)
      .catch(handleError);
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <Status
      loading={<LoadingState />}
      empty={<EmptyState />}
      error={error => <ErrorState error={error} retry={fetchResults} />}
      success={results => <Results results={results} />}
    />
  );
};

render(<App />, document.getElementById("root"));