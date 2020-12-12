import React, { useState, useEffect } from 'react';
import { factory } from 'typescript';

function usePreFetch(fatory) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    factory();
    const comp = lazy(factory);
    setComponent(comp);

  }, [factory]);
  return component;
}

export default usePreFetch;