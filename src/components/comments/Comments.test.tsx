import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure, render } from 'enzyme';
import { mockUsers } from '../../__mocks__/mockUsers';
import Comments from './Comments';

configure({adapter: new Adapter()});

/** @test {Comments Component} */
describe('Comments Component', () => {

  it('should render wall comments from an user with comments', () => {
    const wrapper = mount(<Comments title={'Wall'}
      users={mockUsers}
      loggedUser={mockUsers[0]}
      timelineUser={null} />);
    expect(wrapper.text()).toContain('Wall')
    expect(wrapper.text()).toContain('Hola texto')
  });
  it('should render timeline of the user with comments', () => {
    const wrapper = render(<Comments title={'Timeline'}
      users={mockUsers}
      loggedUser={mockUsers[1]}
      timelineUser={mockUsers[0]} />);
    expect(wrapper.text()).toContain('Timeline')
    expect(wrapper.text()).toContain('Hola texto')
  });
  it('should render timeline of the user without comments', () => {
    const wrapper = render(<Comments title={'Timeline'}
      users={mockUsers}
      loggedUser={mockUsers[1]}
      timelineUser={mockUsers[2]} />);
    expect(wrapper.text()).toContain('Timeline')
    expect(wrapper.text()).not.toContain('Hola texto')
  });
});