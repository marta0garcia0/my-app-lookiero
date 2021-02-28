import { UserLogin, User } from '../models/user';
import { ApiData } from '../models/apiData';

const API_URL = 'https://reqres.in/api/';

const getUsers = (page: number = 1, perPage: number = 12): Promise<ApiData> =>
  fetch(`${API_URL}users?page=${page}&per_page=${perPage}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataParsed: User[] = data.data.map((user: any) => {
        return { ...user, firstName: user.first_name, lastName: user.last_name };
      });
      return { ...data, data: dataParsed };
    });

const login = (user: UserLogin): Promise<UserLogin> =>
  fetch(`${API_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    cache: 'no-cache'
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

export { getUsers, login };
