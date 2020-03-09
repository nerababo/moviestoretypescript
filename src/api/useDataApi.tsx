import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const useDataApi = () => {
  const [url, setUrl] = useState("");

  const [{ isLoading, isError, data }, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;
    dispatch({ type: "FETCH_PROGRESS" });

    const fetchData = async () => {
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch {
        if (!didCancel) {
          dispatch({ type: "FETCH_ERROR" });
          throw new Error();
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);

  return { isLoading, isError, setUrl, data };
};

const initialData = {};
type DataType = {
  results: {
    original_title: string;
    url: string;
    overview: string;
    id: string;
  }[];
};
type StateType = {
  isLoading: boolean;
  isError: boolean;
  data: DataType | any;
};
type ActionType =
  | { type: "FETCH_PROGRESS" }
  | { type: "FETCH_SUCCESS"; payload: {} }
  | { type: "FETCH_ERROR" };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "FETCH_PROGRESS": {
      return { ...state, isLoading: true, isError: false };
    }
    case "FETCH_SUCCESS": {
      return { ...state, isLoading: false, data: action.payload };
    }
    case "FETCH_ERROR": {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      throw new Error();
    }
  }
};

export default useDataApi;
