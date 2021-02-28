import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import { mockUsers } from '../../__mocks__/mockUsers';
import Follow from './Follow';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

/** @test {Follow Component} */
describe('Follow Component', () => {

  it('should render the follow component', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Follow
        history={{}}
        users={mockUsers}
        loggedUser={mockUsers[0]} />
      </BrowserRouter>
    );
    expect(wrapper.text()).toContain('');
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should render George', async() => {
    const wrapper = mount(
      <BrowserRouter>
        <Follow
        history={{}}
        users={mockUsers}
        loggedUser={mockUsers[0]} />
      </BrowserRouter>
    );
    expect(wrapper.text()).toContain('');
    expect(wrapper.find('input')).toHaveLength(1);
    wrapper.find('input').simulate('change', { target: { value: 'George' } })
    setTimeout(() => {
      expect(wrapper.text()).toContain('George');
    }, 100);
  });

  it('should render six users', async() => {
    const wrapper = mount(
      <BrowserRouter>
        <Follow
        history={{}}
        users={mockUsers}
        loggedUser={mockUsers[0]} />
      </BrowserRouter>
    );
    wrapper.find('input').simulate('change', { target: { value: 'a' } })
    setTimeout(() => {
      expect(wrapper.find('.follow-search__item')).toHaveLength(6);
    }, 100);
  });
});