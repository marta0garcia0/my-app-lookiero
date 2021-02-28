import React from 'react';
import './Wall.scss';
import { User } from '../../models/user';
import { withRouter } from 'react-router-dom';
import FollowingContainer from '../../components/following/FollowingContainer';
import PostContainer from '../../components/post/PostContainer';
import FollowContainer from '../../components/follow/FollowContainer';
import CommentsContainer from '../../components/comments/CommentsContainer';
import { Button } from '../../App';

interface Props {
  users: User[];
  loggedUser: User;
  history: any;
  onGetUser: Function;
  onLogout: Function;
}

function Wall(props: Props) {

  return (
    <div>
      <div className='container-header'>
        <img onClick={() => props.history.push('/') } src={props.loggedUser && props.loggedUser.avatar} width={40} />
        <div>Hi {props.loggedUser && props.loggedUser.firstName} {props.loggedUser && props.loggedUser.lastName}!</div>
        <Button onClick={() => props.onLogout()}> Logout </Button>
      </div>
      <div className='container'>
        <div className='container-left'>
          <div className='container-left-top'>
            <FollowingContainer history={props.history} />
          </div>
          <div className='container-left-bottom'>
            <FollowContainer />
          </div>
        </div>
        <div className='container-right'>
          <div className='container-right-top'>
            <CommentsContainer title={'Wall'}/>
          </div>
          <div className='container-right-bottom'>
            <PostContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter<any, any>(Wall);
