import { connect } from 'react-redux';
import { State } from './../../state/reducers/rootReducer';
import { followUser, setUserTimeline, updateLoggedUser } from '../../state/actions/userLIstActions';
import Follow from './Follow';
import { User } from '../../models/user';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onFollowUser: (user: User) => {
      dispatch(followUser(user));
    },
    onUpdateLoggedUser: (user: User) => {
      dispatch(updateLoggedUser(user));
    },
    onSetUserTimeline: (user: User) => {
      dispatch(setUserTimeline(user));
    }
  };
};
const mapStateToProps = (state: State) => ({
  usersApiData: state.users && state.users.usersApiData,
  users: state.users && state.users.users,
  loggedUser: state.users && state.users.loggedUser,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
