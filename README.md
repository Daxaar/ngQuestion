# ngQuestion
Angular Questionnaire

Playground for an Angular 1.4 questionnaire project using WebApi Azure hosted backend and sailsjs equivalent.  Built with minimal initial tooling.

#### Prerequisites

1. Node (v4.5+ to run the server). Recommend installing node using the Node Version Manager [nvm](https://github.com/creationix/nvm).
2. [Bower](http://bower.io) 
3. [SailsJs](http://sailsjs.org/) (required to run the server for persisting question boards).

#### Running the application

1. Clone the repository.
2. `npm install` (This will also install bower dependencies).
3. `npm start` (This will run the gulp build and live server from the dist directory).
4. To run the server open another terminal window and navigate to the `server/sailsjs` directory, then run `sails lift`.
