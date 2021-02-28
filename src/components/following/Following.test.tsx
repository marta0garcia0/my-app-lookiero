import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import { mockUsers } from '../../__mocks__/mockUsers';
import Following from './Following';

configure({adapter: new Adapter()});

/** @test {Following Component} */
describe('Following Component', () => {

  it('should an empty following list', () => {
    const wrapper = mount(
      <Following
        onUnfollow={() => {}}
        onSetUserTimeline={() => {}}
        history={{}}
        loggedUser={mockUsers[1]} />
    );
    expect(wrapper.text()).toContain('You\'re not following anybody yet, add new folks');
  });
  it('should a two items following list', () => {
    const wrapper = mount(
      <Following
        onUnfollow={() => {}}
        onSetUserTimeline={() => {}}
        history={{}}
        loggedUser={mockUsers[0]} />
    );
    expect(wrapper.text()).not.toContain('You\'re not following anybody yet, add new folks');
    expect(wrapper.find('.following-box__item')).toHaveLength(2);
  });
  it('should remove one item', () => {
    const wrapper = mount(
      <Following
        onUnfollow={() => {}}
        onSetUserTimeline={() => {}}
        history={{}}
        loggedUser={mockUsers[0]} />
    );
    expect(wrapper.text()).not.toContain('You\'re not following anybody yet, add new folks');
    expect(wrapper.find('svg')).toHaveLength(4);
    wrapper.find('svg').at(0).simulate('click');
    setTimeout(() => {
      expect(wrapper.find('.following-box__item')).toHaveLength(1);
    }, 100);
  });
});