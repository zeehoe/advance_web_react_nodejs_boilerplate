# Advance web page setup using Node js and React

This project is a advance setup for a web application using React as frontend, and Node.js as backend. This project 3 pages (Login, Register and Main page), while the backend have only one model which is User model. The data management system is using MongoDB, for simple demonstration. This project consist of 2 part:

### public
React frontend sources codes are here.

### server
Node.js backend producing api for frontend to use.


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

## Sample demo image
![demo_image1](image1.png?raw=true "Demo Image 1")
![demo_image2](image2.png?raw=true "Demo Image 2")

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


