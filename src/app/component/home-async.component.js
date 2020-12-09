/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import React from "react";
import loadable from "@loadable/component";

import { LoadingComponent } from "./common/loading.component";
import { ErrorBoundaryComponent } from "./common/error-boundary.component";

const LoadableComponent = loadable(() => import("./home.component"), {
  fallback: <LoadingComponent />,
});

export const HomeAsyncComponent = (props) => (
  <ErrorBoundaryComponent>
    <LoadableComponent {...props} />
  </ErrorBoundaryComponent>
);
