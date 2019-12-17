import React from "react";

export const ErrorContainer = ({error}) => {
  return (
    <div className='error-container'>
      {error}
    </div>
  );
};