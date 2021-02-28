import React, { useEffect } from 'react';
import { Post, User } from '../../models/user';
import './Comments.scss';

interface Props {
  title: string;
  users: User[];
  loggedUser: User | null;
  timelineUser: User | null;
}
const listRef = React.createRef<HTMLDivElement>();

function Comments(props: Props) {

  useEffect(() => {
    if (listRef && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  });
  const usersWithComments: User[] = props.users.filter((user: User) => {
    return props.loggedUser && user.id === props.loggedUser.id ||
      props.loggedUser && props.loggedUser.following && props.loggedUser.following.find((us: User) => us.id === user.id);
  });
  let comments: Post[] = [];
  if (props.title === 'Wall') {
    usersWithComments.map((user: User) => {
      if (user.posts) {
        comments = comments.concat(user.posts.map((post: Post) => {
          return { ...post, user };
        }));
      }
      return;
    });
    comments.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      return -1;
    });
  } else {
    if (props.timelineUser && props.timelineUser.posts) {
      comments = props.timelineUser.posts.map((post: Post) => {
        return { ...post, user: props.timelineUser ? props.timelineUser : undefined };
      });
    }
  }
  return (
    <div className={`box-container ${props.title === 'Wall' ? '' : 'timeline'}`} >
      <span>{props.title === 'Wall' ? props.title : props.timelineUser && props.timelineUser.firstName + ' ' + props.title}</span>
      <div ref={listRef} className={`posts-container ${props.title === 'Wall' ? '' : 'timeline'}`} >
        {
          comments.map((comment: Post) => {
            return (
              <div className='comment-container' key={comment.text.slice(0, 20)}>
                <img src={comment.user && comment.user.avatar} width={40} />
                <div className={`post-bubble ${comment.user && props.loggedUser && comment.user.id === props.loggedUser.id ? 'me' : ''}`}>
                  <div>{comment.user && comment.user.firstName} {comment.user && comment.user.lastName} - {(new Date(comment.date)).toLocaleString()}</div>
                  <div>{comment.text}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Comments;
