1. If it works in the browser but tests are failing check karma.config.js.
  - Have you just added a new library using bower?  Make sure it's picked up by the files property either via a glob or specific path.
  - Make sure dependencies are in the correct order in the files folder.  I've had problems with tests when I added ui-router before angular.

2. If it works in karma but not in the browser make sure you've added the latest scripts to your index.html (or whatever you've called your main entry point html file).

3. When you stringify an object you obviously lose the behaviours on that object (methods) or any functions inherited from the prototype.  So how do you parse an object from JSON back to the original object **type** with all of the inherient behaviour available?  Short answer, you don't.  Long answer, take a look at some of the [ideas here](http://stackoverflow.com/questions/15054678/how-to-add-methods-to-a-json-objects-prototype).
