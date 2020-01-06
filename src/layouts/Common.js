import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default CommonLayout;
