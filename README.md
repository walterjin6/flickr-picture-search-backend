# Flickr Picture Search

[Click me to view Demo Website](https://monashflickr.onrender.com/)

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

## API documentation

Pls see here for API documentation

## Features

1.  Input validation on login and search
2.  OAuth 2.0: use refreash token, Access token, JWT 
3.  Persist login by select "trust this device" on login form
4.  View public pictures via public API without login needed
5.  View private pictures via private API with login needed
6.  Use Redux Toolkit query to manage global state and cache

## Main Tech Stacks used

1. React: to construct UI components
2. React Router: to navigate between pages
3. Redux Toolkit Query: for server request, global state and cache management
4. TailwindCSS: to style the UI
5. Jest: to run tests and provide test coverage>
