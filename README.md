# 14-RELATIONSHIP-MODELING
[![Build Status](https://travis-ci.com/tamarushin/14-relationship-modeling.svg?branch=master)](https://travis-ci.com/tamarushin/14-relationship-modeling)

# Author
Tama Rushin

# Lab Build
I used RESTful API best practices to complete this assignment. GET-Receives data in a convient format. POST-creates new data. PUT-Updates data and DELETE-removes data. My Lab 14 is a full CRUD application.

# App Module--app.js
The app module is creating an http server, defining server-on behavior and exporting an interface for starting and stopping the server. The app module exports an object containing start and stop methods.
Node provides an easily extensible logging system, allowing you to control which messages get logged and to where they are output.
I imported Express, Morgan, Cors and Mongoose
Express is used as the standard server framework. Morgan is what logs the messages and Mongoose handles the schema of gummyBears. Cors is

## src.models Module
The models module contains a gummyBears.js file that requires in mongoose and has a gummyBearsSchema with the properties: name, color, and flavor. The mongoose.model is being exported from this file. The model module also contains a candyStore.js file that requires in mongoose and has a candyStoreschema with the properties: name, location, manager and forests.

# Test and Mocks

Contains the files: setup.js, candyStore-mock.js and gummyBear-mock.js. These files assist in the tests by setting up the environment variables and mock objects to test.

candyStore.test.js and gummyBear.test.js contain tests for POST, GET, DELETE and PUT methods.

POST - tests for status codes:
200 - successful post request
400 - if an incomplete post request is sent
409 - if keys are unique
GET - tests for status codes:
200 - successful get request
404 - if id is invalid
DELETE - tests for status codes:
204 - successful delete request
404 - if id is invalid
400 - if an incomplete delete request is sent
PUT - tests for status codes:
200 - successful update request
400 - if an incomplete put request is sent
404 - if id is invalid
409 - if keys are unique