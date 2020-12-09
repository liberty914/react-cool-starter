import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState } from "../store";
import { IUser } from "../api/example-user";
import { fetchUserDataIfNeed } from "../store/user-data-reducer";
import { InfoComponent } from "./common/info.component";

type Props = {
  match: Record<string, any>;
};

const UserInfo = ({ match }: Props): JSX.Element => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: AppState) => state.userDataReducer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchUserDataIfNeed(id));
  }, [dispatch, id]);

  const renderInfo = () => {
    const userInfo = userData[id];

    if (!userInfo || userInfo.readyStatus === "request")
      return <p>Loading...</p>;

    if (userInfo.readyStatus === "failure")
      return <p>Oops! Failed to load data.</p>;

    return <InfoComponent item={userInfo.item as IUser} />;
  };

  return (
    <div>
      <Helmet title="User Info" />
      {renderInfo()}
    </div>
  );
};

export default memo(UserInfo); // eslint-disable-line import/no-default-export
