import React from "react";

export const Page = (props) => {
  return (
    <div className='container' id="text-block">
      {props.children}
    </div>
  );
};