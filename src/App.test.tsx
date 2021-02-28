import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  const wrapper = render(
		<Provider store={store} >
			<App onAddUsers={() => {}}/>
		</Provider>
	);
  const title = wrapper.getByText(/Select one of the available users:/i);
  expect(title).toBeInTheDocument();

});
