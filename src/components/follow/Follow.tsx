import React, { useEffect, useState } from 'react';
import { ApiData } from '../../models/apiData';
import { FaSearch, FaPlus, FaUser } from 'react-icons/fa';
import './Follow.scss';
import { User } from '../../models/user';
import { withRouter } from 'react-router-dom';

interface Props {
  onUpdateLoggedUser: Function;
  onFollowUser: Function;
  onSetUserTimeline: Function;
  usersApiData?: ApiData | null;
  users: User[] | null;
  loggedUser: User | null;
  history: any;
}

function Follow(props: Props) {
  const [searchItem, setSearchItem] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {

  });
  function search(value: string) {
    setSearchItem(value);
    const filterUsers: User[] | null = value !== '' && props.users ? props.users
      .filter((user: User) => !props.loggedUser || user.id !== props.loggedUser.id)
      .filter((user: User) =>
        user.firstName.toLowerCase().includes(value.toLowerCase()) ||
          user.lastName.toLowerCase().includes(value.toLowerCase())) : [];
    setUsers(filterUsers);
  }
  function followUser(user: User) {
    props.onFollowUser(user);
    props.onUpdateLoggedUser(user);
  }
  return (
    <div className='follow-container'>
      <span className='title'>Follow</span>
      <div className='follow-box'>
        <div className='follow-box__item'>
          <div>
            <input value={searchItem} onChange={(e) => search(e.target.value)} placeholder={'Search:'}/>
          </div>
          <div className='icon'><FaSearch /></div>
        </div>
        <div className='follow-search__container'>
          {users ? users.map((user: User) => {
            return <div className='follow-search__item' key={user.id}>{user.firstName} {user.lastName}
              <div>
                <FaPlus onClick={() => followUser(user)} />
                <div className='toolbar'>Add user</div>
              </div>
              <div>
                <FaUser onClick={() => {
                  props.onSetUserTimeline(user);
                  props.history.push('/timeline');
                }}/>
                <div className='toolbar'>Go to user timeline</div>
              </div>
            </div>;
          }) : ''}
        </div>
      </div>
    </div>
  );
}

export default withRouter<any, any>(Follow);
