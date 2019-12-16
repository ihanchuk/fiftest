import React from "react";

export const Page = (props) => {
  return (
    <div className='container'>
      {props.children}
    </div>
  );
};