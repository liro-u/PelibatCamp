import { useContext } from "react";
import { PageRatioContext } from "../contexts/PageRatioContext";

export const usePageRatioContext = () => {
  const context = useContext(PageRatioContext);

  if (!context) {
    throw Error(
      "usePageRatioContext must be used inside an PageRatioContextProvider"
    );
  }

  return context;
};
