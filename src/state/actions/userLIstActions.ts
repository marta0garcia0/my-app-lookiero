import { Post, User, UserLogin } from '../../models/user';
import { getUsers, login as apiLogin } from '../../services/api';
import { ApiData } from '../../models/apiData';

export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const SET_USER_LIST = 'SET_USER_LIST';
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_STARTED = 'ADD_USERS_STARTED';
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';
export const USER_LOGGED_SUCCESS = 'USER_LOGGED_SUCCESS';
export const USER_LOGGED_FAILURE = 'USER_LOGGED_FAILURE';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const UPDATE_USER_LOGGED = 'UPDATE_USER_LOGGED';
export const LOGOUT = 'LOGOUT';
export const POST_COMMENT = 'POST_COMMENT';
export const SET_USER_TIMELINE = 'SET_USER_TIMELINE';

export const setUserTimeline = (user: User) => ({
  type: SET_USER_TIMELINE,
  payload: { user }
});

export const unfollow = (user: User) => ({
  type: UNFOLLOW_USER,
  payload: { user }
});

export const postComment = (post: Post) => ({
  type: POST_COMMENT,
  payload: { post }
});

export const followUser = (user: User) => ({
  type: FOLLOW_USER,
  payload: { user }
});

export const updateLoggedUser = (user: User) => ({
  type: UPDATE_USER_LOGGED,
  payload: { user }
});

export const logout = () => ({
  type: LOGOUT
});

const setUsers = (users: User[], page: number | null) => ({
  type: SET_USER_LIST,
  payload: { users, page }
});

const addUsersSuccess = (apiData: ApiData) => ({
  type: ADD_USERS_SUCCESS,
  payload: {
    ...apiData
  }
});

const addUsersStarted = () => ({
  type: ADD_USERS_STARTED
});

const addUsersFailure = (error: any) => ({
  type: ADD_USERS_FAILURE,
  payload: {
    error
  }
});

const userLoggedSuccess = (res: {token: string}) => ({
  type: USER_LOGGED_SUCCESS,
  payload: {
    token: res.token
  }
});

const userLoggedFailure = (error: any) => ({
  type: USER_LOGGED_FAILURE,
  payload: {
    error
  }
});

const setLoggedUser = (res: UserLogin) => ({
  type: SET_LOGGED_USER,
  payload: res
});

export const addUsers = (page: number, perPage?: number) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(addUsersStarted());
    getUsers(page, perPage)
      .then((res: ApiData) => {
        dispatch(addUsersSuccess(res));
        dispatch(setUsers(res.data, page));
      })
      .catch((err) => {
        dispatch(addUsersFailure(err.message));
      });
  };

export const login = (user: UserLogin) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    apiLogin(user)
      .then((res: any) => {
        dispatch(userLoggedSuccess(res));
        dispatch(setLoggedUser(user));
      })
      .catch((err) => {
        dispatch(userLoggedFailure(err.message));
      });
  };


