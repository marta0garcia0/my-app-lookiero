import React from 'react';
import './Timeline.scss';
import { User } from '../../models/user';
import { withRouter } from 'react-router-dom';
import FollowingContainer from '../../components/following/FollowingContainer';
import CommentsContainer from '../../components/comments/CommentsContainer';
import { Button } from '../../App';

interface Props {
  users: User[];
  loggedUser: User;
  timelineUser: User;
  history: any;
  onGetUser: Function;
  onLogout: Function;
}

function Timeline(props: Props) {

  return (
    <div style={{ height: 'calc(100% - 100px)' }}>
      <div className='container-header'>
        <img onClick={() => props.history.push('/') } src={props.loggedUser && props.loggedUser.avatar} width={40} />
        <div>Hi {props.loggedUser && props.loggedUser.firstName} {props.loggedUser && props.loggedUser.lastName}!</div>
        <Button onClick={() => props.onLogout()}> Logout </Button>
      </div>
      <div className='container-timeline'>
        <div className='container-timeline-left'>
          <div className='container-timeline-left-top'>
            <FollowingContainer title={'Timeline'} history={props.history} user={props.timelineUser}/>
          </div>
        </div>
        <div className='container-timeline-right'>
          <div className='container-timeline-right-top'>
            <CommentsContainer title={'Timeline'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter<any, any>(Timeline);
