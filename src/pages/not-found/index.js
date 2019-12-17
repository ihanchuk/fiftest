import React from "react";
import { Page } from "../../common/ui/page";
export const NotFound = () => {
  return (
    <Page>
      <h1 class="main">
        404 <span>Not Found...</span>
      </h1>
      {<div class="notFound"></div>}
    </Page>
  );
};
