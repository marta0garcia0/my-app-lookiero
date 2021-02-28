import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import Post from './Post';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

configure({adapter: new Adapter()});

/** @test {Post Component} */
describe('Post Component', () => {

  it('should render', () => {
    /*
    <Provider store={store}>
      <Post onPostComment={() => {}}/>
    </Provider>
    */
  });
});