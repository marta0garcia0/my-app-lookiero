import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import React from 'react';
import { store } from '../../state/store';
import { mockUsers } from '../../__mocks__/mockUsers';
import { Provider } from 'react-redux';
import { addUsers, SET_USER_LIST } from '../../state/actions/userLIstActions';
import Timeline from './Timeline';

configure({adapter: new Adapter()});

/** @test {Timeline Component} */
describe('Timeline Component', () => {

  it('should render the login form', () => {
  });
});