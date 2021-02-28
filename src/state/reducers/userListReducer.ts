// import { Message } from '../../models/message';
import { User } from '../../models/user';
import { ADD_USERS_SUCCESS, SET_LOGGED_USER, SET_USER_LIST,
  USER_LOGGED_SUCCESS, USER_LOGGED_FAILURE, FOLLOW_USER, UPDATE_USER_LOGGED, LOGOUT, UNFOLLOW_USER, POST_COMMENT, SET_USER_TIMELINE } from '../actions/userLIstActions';
import { ApiData } from '../../models/apiData';

export interface State {
  loggedUser: User | null,
  users: User[],
  timelineUser: User | null,
  token: {
    token: string | null,
  }
}

type Action = {
  type: string;
  payload: any;
}

const initialState = {
  loggedUser: null,
  timelineUser: null,
  users: [],
  token: {
    token: null,
  }
};

const userListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
  case SET_USER_TIMELINE:
    return { ...state, timelineUser: state.users.find((user: User) => user.id === action.payload.user.id) };
  case SET_LOGGED_USER:
    return { ...state, loggedUser: state && state.users &&
      state.users.find((user) => user.email === action.payload.email) };
  case SET_USER_LIST:
    return { ...state, users: action.payload.users };
  case ADD_USERS_SUCCESS:
    return { ...state };
  case USER_LOGGED_SUCCESS:
    return { ...state, token: action.payload };
  case USER_LOGGED_FAILURE:
    return { ...state, token: { token: null } };
  case LOGOUT:
    return { ...state, token: { token: null } };
  case POST_COMMENT:
    const usersUpdate = state.users.map((user: User) => {
      if (state.loggedUser && user.id === state.loggedUser.id) {
        return { ...user, posts: (user.posts ? user.posts.concat(action.payload.post) : [action.payload.post]) };
      }
      return user;
    });
    const loggedUserUpdate = { ...state.loggedUser, posts: state.loggedUser &&
      state.loggedUser.posts ? state.loggedUser.posts.concat(action.payload.post) : [action.payload.post] };
    return { ...state, users: usersUpdate, loggedUser: loggedUserUpdate };
  case UPDATE_USER_LOGGED:
    if (state.loggedUser?.following && state.loggedUser?.following.find((us: User) => us.id === action.payload.user.id)) {
      return { ...state };
    }
    const userUpdated = state.loggedUser && state.loggedUser.following &&
      state.loggedUser.id !== action.payload.user.id ?
      state.loggedUser.following.concat(action.payload.user) :
      (state.loggedUser && action.payload.user.id !== state.loggedUser.id ? [action.payload.user] : []);
    return { ...state, loggedUser: { ...state.loggedUser, following: userUpdated } };
  case FOLLOW_USER:
    const users = state.users.map((user: User) => {
      if (state.loggedUser && user.id === state.loggedUser.id &&
        state.loggedUser.following && state.loggedUser.id !== action.payload.user.id &&
        !state.loggedUser.following.find((us: User) => us.id === user.id)) {
        return { ...user, following: user.following ? user.following.concat(action.payload.user) :
          (action.payload.user.id !== user.id ? [action.payload.user] : []) };
      }
      return user;
    });
    return { ...state, users };
  case UNFOLLOW_USER:
    const followUsers = state.loggedUser && state.loggedUser.following &&
      state.loggedUser.following.filter((user: User) => user.id !== action.payload.user.id);
    const loggedUser = { ...state.loggedUser, following: followUsers };
    const usersUpdated = state.users.map((user: User) => {
      if (state.loggedUser && user.id === state.loggedUser.id) {
        return { ...user, following: followUsers };
      }
      return user;
    });
    return { ...state, loggedUser, users: usersUpdated };
  default:
    return state;
  }
};

export default userListReducer;
