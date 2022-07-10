# Advance Login Register server and frontend setup (Node js and React)

This project is a advance basic setup, consiting of login and register page web application using MongoDB. 

It is aimed to show the integration of node js backend and react frontend.


## Library used - SERVER
> npm i express mongoose nodemon socket.io bcrypt cors dotenv
### `express`
Back end web application framework for Node.js, de facto standard server framework for Node.js

### `cors`
a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin request

### `mongoose`
a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework

### `nodemon`
auto run script again after codes change

### `bcrypt`
JavaScript implementation of the bcrypt password hashing function that allows you to easily create a hash out of a password string


## Library used - Frontend
> yarn add axios styled-components react-router-dom react-toastify

### `axios`
promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data

### `styled-components`
popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript.

### `react-router-dom`
enables you to implement dynamic routing in a web app

### `react-toastify`
beautify toast message components


## How to start server
after setting up mongoose db ( https://www.w3schools.com/nodejs/nodejs_mongodb.asp ), go to server directory, install the library using the command 
> npm i express mongoose nodemon socket.io bcrypt cors dotenv

run
> npm start

## How to start frontend page
after using command
> create-react-app public

heads into the public directory and run command
> yarn add axios styled-components react-router-dom react-toastify

then run
> yarn start





#### credits to
> https://www.youtube.com/watch?v=otaQKODEUFs&t=471s