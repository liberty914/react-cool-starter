import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState } from "../store";
import { fetchUserListIfNeed } from "../store/user-list-reducer";
import { ListComponent } from "./common/list.component";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ userListReducer }: AppState) => userListReducer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchUserListIfNeed());
  }, [dispatch]);

  const renderList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Oops, Failed to load list!</p>;

    return <ListComponent items={items} />;
  };

  return (
    <div>
      <Helmet title="Home" />
      {renderList()}
    </div>
  );
};

export default memo(Home); // eslint-disable-line import/no-default-export
