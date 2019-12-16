import React from "react";
/**
 * 
 * @param {string} param0 
 */
export const ErrorPlaceholder = ({ error }) =>
  error ? <p className="error-info">{error}</p> : null;
