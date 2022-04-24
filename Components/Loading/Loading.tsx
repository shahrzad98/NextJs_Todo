import classes from "./Loading.module.scss";
import React, { PropsWithChildren } from "react";

type LoadingProps = {
  isLoading: boolean;
};
const Loading: React.FC<PropsWithChildren<LoadingProps>> = (props) => {
  return (
    <>
      {props.isLoading ? (
        <div className={classes.loadingContainer} />
      ) : (
        props.children
      )}
    </>
  );
};

export default Loading;
