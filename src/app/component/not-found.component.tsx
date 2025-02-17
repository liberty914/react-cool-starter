import React, { memo } from "react";
import { Helmet } from "react-helmet";

interface Props {
  staticContext?: { status: string };
}

const NotFound = ({ staticContext }: Props) => {
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.status = "404";

  return (
    <div>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  );
};

NotFound.defaultProps = {
  staticContext: null,
};

export const NotFoundComponent = memo(NotFound);
