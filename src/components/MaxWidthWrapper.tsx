import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">{children}</div>;
};

export default MaxWidthWrapper;
