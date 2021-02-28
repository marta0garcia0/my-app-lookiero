## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Documentation about the project
The first view is the login where the user can choose which of the available users to be, once choosen, you can set any password, the API will return a successful login, then it will redirect to the Wall, the logged user can be changed by clicking in logout and choosing another one to test the functionality.

In the wall view, the user can search for other users and follow them or visit their timeline.
In the following list the users can be unfollowed or visited
When a timeline is visited you can go back to your wall by clicking in the image of your user in the top left of the page.
The design is also responsive.

To check that the wall works fine you may want to login with different users, follow users, post messages and see the result.

## Libraries added
Enzyme, jest, @testing-library, ... for testing
styled-components for styling
redux-thunk, redux for the store
typescript
