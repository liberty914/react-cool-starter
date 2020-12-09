import { AppThunk } from "../store";
import { fetchUserListIfNeed } from "../store/user-list-reducer";
import { fetchUserDataIfNeed } from "../store/user-data-reducer";
import { App } from "./app";

// @ts-expect-error
import { HomeAsyncComponent } from "../component/home-async.component";
// @ts-expect-error
import { UserInfoAsyncComponent } from "../component/user-info-async.component";
import { NotFoundComponent } from "../component/not-found.component";

export const ROUTE_LIST = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomeAsyncComponent, // Add your route here
        loadData: (): AppThunk[] => [
          fetchUserListIfNeed(),
          // Add other pre-fetched actions here
        ],
      },
      {
        path: "/UserInfo/:id",
        component: UserInfoAsyncComponent,
        loadData: ({ params }: { params: { id: string } }): AppThunk[] => [
          fetchUserDataIfNeed(params.id),
        ],
      },
      {
        component: NotFoundComponent,
      },
    ],
  },
];
