import React, { memo } from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../api/example-user";

interface Props {
  items: IUser[];
}

export const ListComponent = memo(({ items }: Props) => (
  <div>
    <h4>User List</h4>
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
));
