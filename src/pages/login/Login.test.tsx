import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import React from 'react';
import { store } from '../../state/store';
import { mockUsers } from '../../__mocks__/mockUsers';
import Login from './Login';
import LoginContainer from './LoginContainer';
import { Provider } from 'react-redux';
import { addUsers, SET_USER_LIST } from '../../state/actions/userLIstActions';

configure({adapter: new Adapter()});

/** @test {Login Component} */
describe('Login Component', () => {

  it('should render the login form', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );
    expect(wrapper.text()).toContain('Login');
    expect(wrapper.find('input')).toHaveLength(2);
  });
});