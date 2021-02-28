import React, { useState } from 'react';
import './Post.scss';
import { Button } from '../../App';
import { Post as PostModel } from './../../models/user';

interface Props {
  onPostComment: Function;
}

function Post(props: Props) {
  const [comment, setComment] = useState('');

  function postComment() {
    const post: PostModel = {
      date: new Date(),
      text: comment
    };
    props.onPostComment(post);
    setComment('');
  }

  return (
    <div className='box-container'>
      <span>Post message</span>
      <div className='post-container'>
        <input value={comment}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              postComment();
            }
          }}
          onChange={(e) => setComment(e.target.value)} placeholder={'Post a comment!'}></input>
        <Button onClick={() => postComment()} >Post</Button>
      </div>
    </div>
  );
}

export default Post;
