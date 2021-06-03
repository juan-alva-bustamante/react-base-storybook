# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install dependencies

Run the command `npm install` to install the dependencies

## Serve the component with storybooks

Run the command `npm run storybook` to serve the components in [localhost:6006](localhost:6006)

# Prepare project to publish to [npm](https://www.npmjs.com/)

To publish to npm is required to have an account in [npm](https://www.npmjs.com/)

Once to have an account run the command `npm adduser` in the console command line and type the required values

Then run the command `npm login` and type the account data

Change the package name and version into `package.json`

```bash
{
  "name": "reclutalia-components", <- change this name to you package library name
  "version": "0.0.6", <- change the version in every publish
  "private": false, <- The flag must be in false, true is for private pachages
  "main": "lib/index.js",
  ....
```

Finally, run the command `npm publish` to publish package to npm

To see the published package go to you npm account in your packages published
