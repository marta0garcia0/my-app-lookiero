import { connect } from 'react-redux';
import { State } from './../../state/reducers/rootReducer';
import { unfollow, setUserTimeline } from '../../state/actions/userLIstActions';
import Following from './Following';
import './Following.scss';
import { User } from '../../models/user';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onUnfollow: (user: User) => {
      dispatch(unfollow(user));
    },
    onSetUserTimeline: (user: User) => {
      dispatch(setUserTimeline(user));
    }
  };
};
const mapStateToProps = (state: State) => ({
  loggedUser: state.users && state.users.loggedUser,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Following);
