import React from "react";

export const ErrorPlaceholder = ({ error }) =>
  error ? <p className="error-info">{error}</p> : null;
