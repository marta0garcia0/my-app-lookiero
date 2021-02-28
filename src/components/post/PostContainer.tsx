import { connect } from 'react-redux';
import { postComment } from '../../state/actions/userLIstActions';
import Post from './Post';
import { Post as PostModel } from './../../models/user';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onPostComment: (post: PostModel) => {
      dispatch(postComment(post));
    }
  };
};
const mapStateToProps = () => ({
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
