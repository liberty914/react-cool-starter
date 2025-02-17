import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configurecreateMockStore from "redux-mock-store";

export const mockStore = (obj = {}): Record<string, any> => {
  const store = configurecreateMockStore([thunk])(obj);
  const originalDispatch = store.dispatch;
  store.dispatch = jest.fn(originalDispatch);

  const ProviderWithStore = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { ...store, ProviderWithStore };
};
