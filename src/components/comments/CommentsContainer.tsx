import { connect } from 'react-redux';
import { State } from './../../state/reducers/rootReducer';
import Comments from './Comments';

const mapDispatchToProps = () => {
  return {
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
)(Comments);
