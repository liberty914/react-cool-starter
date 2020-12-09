import { History } from "history";
import { connectRouter } from "connected-react-router";

import { userListReducer } from "./user-list-reducer";
import { userDataReducer } from "./user-data-reducer";

// Use inferred return type for making correctly Redux types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRootReducer = (history: History) => ({
  userListReducer,
  userDataReducer,
  router: connectRouter(history) as any,
  // Register more reducers...
});
