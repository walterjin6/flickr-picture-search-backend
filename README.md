# Flickr Picture Search

### [Click me to view Demo Website](https://monashflickr.onrender.com/)

This project is the backend part for searching Flicker pictures through APIs provided by Flickr.

## Instructions

First clone this repository:  git clone https://github.com/walterjin6/monashflickr-backend.git

Contact [me](mailto:jinwei6@gmail.com)  to get`.env` file, and put .env file in project root folder

Install dependencies: npm install

Run App: npm run dev

Open [http://localhost:3500](http://localhost:3500) to view it in the browser.

Launch the frontend APP from [here](https://github.com/walterjin6/monashflickr-frontend)  

Test APP: npm test

Build APP: npm run build

##  API documentation

Pls see [here](https://github.com/walterjin6/monashflickr-backend/blob/main/API-Documentation.md) for API documentation

## Features

1.  OAuth 2.0: use refresh token, Access token, JWT authentication
2.  View public pictures via public API without login needed
3.  View private pictures via private API with login needed
4.  loginLimiter: Limit the number of failed login for security purpose

## Main Tech Stacks used

1. Node: backend architecture
2. Express: to construct Restful API
3. JWT: for authentication
4. MongoDB: to store username and password
5. Mongoose: for ORM
6. Postman: to test the API
7. Jest: to run tests and provide test coverage
