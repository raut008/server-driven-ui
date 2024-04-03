import { useState, useEffect } from "react";
import { authstore } from "@/store/authstore";

const useStoreState = (selector) => {
  const [state, setState] = useState(selector(authstore.getState()));

  useEffect(() => {
    const handleStateChange = () => {
      setState(selector(authstore.getState()));
    };
    authstore.subscribe(handleStateChange);
    return () => {
      authstore.unsubscribe(handleStateChange);
    };
  }, [selector]);

  return state;
};

export default useStoreState;
