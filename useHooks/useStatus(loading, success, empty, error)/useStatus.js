import { useState } from "react";

const useStatus = initialState => {
  const [state, setState] = useState(initialState);

  const Status = props => {
    const { status, error, results } = state;

    switch (status) {
      case "error":
        return props[status](error);
      case "success":
        return props[status](results);
      default:
        return props[status] || null;
    }
  };

  return { Status, setState };
};

export default useStatus;