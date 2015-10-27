1. If it works in the browser but tests are failing check karma.config.js.
  - Have you just added a new library using bower?  Make sure it's picked up by the files property either via a glob or specific path.
  - Make sure dependencies are in the correct order in the files folder.  I've had problems with tests when I added ui-router before angular.

2. If it works in karma but not in the browser make sure you've added the latest scripts to your index.html (or whatever you've called your main entry point html file).
