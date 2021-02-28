import { User } from '../../models/user';
import './Following.scss';
import { FaMinus, FaUser } from 'react-icons/fa';

interface Props {
  onUnfollow: Function;
  onSetUserTimeline: Function;
  loggedUser: User | null;
  title?: string;
  user?: User | null;
  history: any;
}

function Following(props: Props) {
  const user = props.user ? props.user : props.loggedUser;
  return (
    <div className={`following-container ${props.title === 'Wall' ? '' : 'timeline'}`} >
      <span className='title'>Following</span>
      <div className={`following-box ${props.title === 'Wall' ? '' : 'timeline'}`} >
        {user && user.following ?
          user.following.map((us: User) => {
            return <div key={us.id} className='following-box__item'>{us.firstName} {us.lastName}
              {props.title !== 'Timeline' ?
                <div>
                  <FaMinus onClick={() => {
                    props.onUnfollow(us);
                  }}/>
                  <div className='toolbar'>Delete user</div>
                </div>
                : ''
              }
              <div>
                <FaUser onClick={() => {
                  props.onSetUserTimeline(us);
                  props.history.push('/timeline');
                }}/>
                <div className='toolbar'>Go to user timeline</div>
              </div>
            </div>;
          })
          : <p>{props.user ? `${user?.firstName} is not following anybody `: 'You\'re not following anybody yet, add new folks!'}</p> }
      </div>
    </div>
  );
}

export default Following;
