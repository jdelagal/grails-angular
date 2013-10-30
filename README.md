# Grails and AngularJS Demo

Welcome! This project is a demo of a Single Page Application created using:

* AngularJS for a pure HTML/JS front-end application (`frontend` folder), using Angular's `$resource` to communicate with the server. This project can be built and run using Yeoman (Yo, Grunt and Bower).
* Grails for the backend (`backend` folder), using Grails 2.3.1 excellent capabilities for serving a REST API.

This is the companion code of my talk "[Developing SPI applications using Grails and AngularJS](http://www.slideshare.net/alvarosanchezmariscal/codemotion2013)".

## How to get started

1. Install [Yeoman](http://yeoman.io) (note: you don't need Grails. It will be downloaded automatically):

        npm install -g yo

2. Make sure you have `yo`, `grunt` and `bower` command line tools:

        yo --version
        grunt --version
        bower --version

3. Start the backend:

        cd backend
        ./grailsw run-app

4. Install frontend dependencies (you need to do this only once):

        cd ../frontend
        npm install

5. Start the frontend:

        grunt server

