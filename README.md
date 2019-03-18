# Movie Zone  
This is my code for the test for Zone Digital. I've spent a good few hours on this but it's far from as good as I would
like but I'm happy with it given the time spent.

### ⚛️ [View the App here](https://movie-zone.now.sh/)


## Assumptions and decisions made
Here are some assumptions and choices I made given the brief:

- Built mobile first
- Opted to use checkboxes and radios over building a range slider (more accessible)
- Used `vote_average` as the rating and for ordering movies
- Loaded the data upfront but not in the normal way I would choose (keeping things simple)
- Used ES6
- Assumed Browser version of "Last 2"
- Assumed JS usage acceptable


## What's missing?
The first 90% of the work took 90% of the time, the remaining 10% would take a further 90%!

Things that are missing (but I would add on any commercial project):  
- [ ] Libraries from NPM - I would normally use RXJS and Redux Observable plus lodash but didn't include them here.  
- [ ] Unit tests for selectors and library code.  
- [ ] End-to-End tests (using Cypress.io) for testing paths through the app.  
- [ ] Storybook - for component building and having a styleguide.  
- [ ] Code splitting - serving only the code needed when needed.  
- [ ] Performance enhancements - using `memo` or `shouldComponentUpdate`.  
- [ ] Server Side Rendering - Enable non-JS browsers to see something.  
- [ ] Finer attention to detail - I'd tweak breakpoints, lock down styling and improve things in the code.  
- [ ] X Browser testing - I'm happy working with any browser but am used to "Last 2 Versions" being standard these days.  
- [ ] Icons - We're not supposed to use IconFonts any more, I'm happy to include SVGs and use a library but didn't here.  
- [ ] Animations - Staggered loading of the posters, subtle useful animations where necessary.  
- [ ] Elements of delight - Some nice things to add that give the UI a personality.  

## How to run the app locally?
There are instructions below from the Create React App Team that should get you going.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
