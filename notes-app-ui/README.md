# What We'll Build

In this tutorial, we'll build a full stack notes app from scratch, using React, Node.js and PostgreSQL, with the following features:

    Create/Edit/Delete Notes
    Validation on the UI and Backend
    Responsive on mobile screens

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Creating a new React app using TypeScript as our template.

We'll use the npx create-react-app command for this, specifying TypeScript as the template:
`npx create-react-app notes-app --template typescript`

## add Dummy Note for CSS grid testing

Whenever you have UI elements that can change, it's a good idea to manage them in the state.

## Use State for Form Inputs in React

In React, when working with forms, it's a best practice to maintain a state variable for each form input. This enables React to control those inputs, making it easier to capture their values and use them programmatically.

Continue from Create a New Note Object in https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/

## PART 2 - Create the Backend

Nodemon - gives us hot reloading ability

Create a gitignore file using the command

Add config.json to gitignore file

Sequelize command to generate model

```
npx sequelize-cli model:generate --name Note --attributes title:string,content:string
```

After the model file has been created run the below command to create the DB tables
`sequelize db:migrate`

Refer these two for sequelise [connection](https://dev.to/julfikarhaidar/rest-apis-example-with-sequelize-orm-with-node-js-and-express-p40) and [crud](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

## Part 3 - Connect UI to Backend



## Action Items
- [ ] Create a branch and migrate existing code to run with [axios](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
- [ ] Create another branch to use redux instead of react hooks
- [ ] Create a factory pattern with the option to save either using sequalise or mongoose
https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/
https://www.freecodecamp.org/news/how-to-build-a-shopping-cart-with-react-and-typescript/
https://www.freecodecamp.org/news/full-stack-project-create-a-recipe-app-using-react-node-js/#how-to-setup-the-database-and-prisma
https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/
https://www.freecodecamp.org/news/javascript-concepts-you-should-know-before-learning-react/
https://www.freecodecamp.org/news/javascript-concepts-to-know-before-learning-react/
