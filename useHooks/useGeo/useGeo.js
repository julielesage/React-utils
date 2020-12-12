const { reduceEachTrailingCommentRange } = require("typescript")

import React, { useState, useEffect } from 'react';

const useGeo = (opts) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [geo, setGeo] = useState({});

  // to avoir re-rendering
  let isLoad = true;
  let id;

  function onSucess(event) {
    if (isLoad) {
      setIsLoading(false);
      setGeo(event.coords);
    }
  }

  function onFailure(error) {
    if (isLoad) {
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucess, onFailure, opts);
    id = navigator.geolocation.watchPosition(onSucess, onFailure, opts);

    // clean function
    return () => {
      isLoad = false;
      navigator.geolocation.clearWatch(id);
    }
  }, [opts]);

  return { isLoading, geo, error };
};

export default useGeo;