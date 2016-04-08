(function() {


    angular.module('ufo-sightings')                     
        .component('appRoot', {
            templateUrl:"app-component.html",
            controller:AppComponent,

        });   

    function AppComponent( userService) {
        
        this.userService = userService;
    }
    
    AppComponent.$inject = ['userService']
    
    
    
    
})();