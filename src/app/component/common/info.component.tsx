import React, { memo } from "react";

import { IUser } from "../../api/example-user";

interface Props {
  item: IUser;
}

export const InfoComponent = memo(({ item }: Props) => (
  <div>
    <h4>User Info</h4>
    <ul>
      <li>Name: {item.name}</li>
      <li>Phone: {item.phone}</li>
      <li>Email: {item.email}</li>
      <li>Website: {item.website}</li>
    </ul>
  </div>
));
