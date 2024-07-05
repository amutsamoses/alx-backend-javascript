# 0x01-ES6_promise

![ES6 Promises](https://github.com/GiddyLesGid/0x01-ES6_promise/blob/main/es6_promise.jpg)

## Overview

This repository contains the implementation of several tasks related to Promises and Async/Await in NodeJS. The tasks are designed to be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x. The project includes tests using Jest and linting using ESLint to ensure code quality. The allowed editors for this project are vi, vim, emacs, and Visual Studio Code.

## Setup

Before running the project, ensure that NodeJS 12.11.x is installed in your home directory. Follow the steps below to install NodeJS:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify the installation by checking the versions of NodeJS and npm:

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Next, install Jest, Babel, and ESLint in your project directory using the following commands:

npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint


Don't forget to run npm install when you have the package.json file.


Files


The project consists of the following files:

0-promise.js: Contains the implementation of a Promise-returning function getResponseFromAPI.
1-promise.js: Contains the implementation of a Promise-returning function getFullResponseFromAPI.
2-then.js: Contains the implementation of a function handleResponseFromAPI with Promise handlers.
3-all.js: Contains the implementation of a function handleProfileSignup that resolves multiple promises and logs results to the console.
4-user-promise.js: Contains the implementation of a function signUpUser that returns a resolved promise with user information.
5-photo-reject.js: Contains the implementation of a function uploadPhoto that returns a rejected promise with an error message.
6-final-user.js: Contains the implementation of a function handleProfileSignup that calls two other functions and returns an array of promises' results.
7-load_balancer.js: Contains the implementation of a function loadBalancer that returns the value of the first resolved promise.
8-try.js: Contains the implementation of a function divideFunction that performs a division operation and throws an error when the denominator is 0.
9-try.js: Contains the implementation of a function guardrail that handles the result of a given function and errors if any.
100-await.js: Contains the implementation of an async function asyncUploadUser that calls two functions and returns an object with their responses.


How to Run the Tasks


To run the tasks, execute the corresponding files using the npm run dev command. For example:

npm run dev 0-main.js
npm run dev 1-main.js
npm run dev 2-main.js
...

Testing

To test the project and check if the functions are working correctly, use the command:

npm run test

Jest will run the tests and show the results.

Author
Created by GiddyLesGid.
