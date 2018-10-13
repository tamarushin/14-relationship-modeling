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
Express is used as the standard server framework. Morgan is what logs the messages and Mongoose handles the schema of gummyBears.