import React from "react";

type ContentWrapperProps = {
  children: React.ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="row flex-1 ">{children}</div>;
};
