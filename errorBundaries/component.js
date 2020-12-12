import React from "react";
import ErrorBundary from "./errorBundary";

const component = () => {
  return (
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
  );
};

export default component;