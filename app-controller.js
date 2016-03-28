(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('AppController', AppController);    //register the controller with the module.

    //define the controller. 
    function AppController() {
        this.message = "Hello from an AngularJS controller!"
    }
    
    
})();