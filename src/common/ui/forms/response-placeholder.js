import React from "react";

export const ResponsePlaceholder = ({ response }) =>
response ? <p className="response-info">{response}</p> : null;