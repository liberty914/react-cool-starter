import axios from "axios";

import { ENV } from "../_bootstrap/env";

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
}

interface UserList {
  data?: IUser[];
  error?: Error;
}

interface UserData {
  data?: IUser;
  error?: Error;
}

export class User {
  public static async getUserList(): Promise<UserList> {
    try {
      const { data } = await axios.get(`${ENV.API_URL}/users`);
      return { data };
    } catch (error) {
      return { error };
    }
  }

  public static async getUserData(id: string): Promise<UserData> {
    try {
      const { data } = await axios.get(`${ENV.API_URL}/users/${id}`);
      return { data };
    } catch (error) {
      return { error };
    }
  }
}
