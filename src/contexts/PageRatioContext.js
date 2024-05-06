import React, { createContext, useReducer, useEffect, useState } from "react";

export const PageRatioContext = createContext([]);

export const pageRatioReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE_RATIO":
      return {
        ...state,
        pageRatio: action.payload,
      };
    case "SET_TEL":
      return {
        ...state,
        pageRatio: "tel",
      };
    case "SET_PC":
      return {
        ...state,
        pageRatio: "pc (default)",
      };
    default:
      return state;
  }
};

export const PageRatioContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pageRatioReducer, {
    pageRatio: "pc (default)",
    pageRatioList: {
      "pc (default)": {
        min: -1,
        max: -1,
      },
      tel: {
        min: -1,
        max: 1.2,
      },
    },
  });

  useEffect(() => {
    console.log("switch to pageRatio : " + state.pageRatio);
  }, [state.pageRatio]);

  const [currentPageRatio, setCurrentPageRatio] = useState(0);

  useEffect(() => {
    const calculatePageRatio = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setCurrentPageRatio(ratio);
    };

    window.addEventListener("resize", calculatePageRatio);

    calculatePageRatio();

    return () => {
      window.removeEventListener("resize", calculatePageRatio);
    };
  }, []);

  useEffect(() => {
    const isMatching = (ratioData) => {
      return (
        (ratioData.min === -1 || ratioData.min < currentPageRatio) &&
        (ratioData.max === -1 || currentPageRatio <= ratioData.max)
      );
    };

    const updatePageRatio = async () => {
      if (isMatching(state.pageRatioList["tel"])) {
        dispatch({ type: "SET_TEL" });
      } else {
        dispatch({ type: "SET_PC" });
      }
    };
    updatePageRatio();
  }, [currentPageRatio]);

  return (
    <PageRatioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PageRatioContext.Provider>
  );
};
