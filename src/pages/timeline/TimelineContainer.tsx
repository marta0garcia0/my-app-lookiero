import { connect } from 'react-redux';
import Timeline from './Timeline';
import { State } from '../../state/reducers/rootReducer';
import { logout } from '../../state/actions/userLIstActions';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onLogout: () => {
      dispatch(logout());
    }
  };
};
const mapStateToProps = (state: State) => ({
  users: state.users && state.users.users,
  loggedUser: state.users && state.users.loggedUser,
  timelineUser: state.users && state.users.timelineUser,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
