# webpack_tute
Trying to achieve code splitting by separating bundle through webpack
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Project with Webpack

This guide provides steps to set up Webpack in a React project.

## Setup Steps

### 1. Set Up Your Project

Create a new React project or navigate to your existing React project directory.

```bash
npx create-react-app my-app
cd my-app
```

### 1. Set Up Your Project
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev html-webpack-plugin
```
## 3. Set Up Babel Configuration

Create a .babelrc file in the root of your project to configure Babel.

```bash
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
## 4. Set Up Webpack Configuration

Create a webpack.config.js file in the root of your project to configure Webpack.

// Webpack configuration setup

## 5. Modify package.json Scripts

```bash
"scripts": {
  "start": "webpack serve --mode development --open --hot",
  "build": "webpack --mode production"
}
```

## 6. Update Entry Point
Ensure your entry point (./src/index.js) correctly renders your React application.

## 7. Create a Basic React Component
Ensure you have a basic React component in ./src/App.js.

## 8. Create an HTML Template
Ensure you have an HTML template file in ./public/index.html.

## 9. Run Your Development Server
Start your development server.

```bash
npm start
```

## 10. Build for Production
When you are ready to create a production build, run:
```bash
npm run build
```


This will generate a dist folder with your production-ready files.
