(function() {


    angular.module('ufo-sightings')                     
        .component('appRoot', {
            templateUrl:"app-component.html",
            controller:AppComponent,
            $routeConfig:[
                {path:"/", name:"Home", component:"home"},
                {path:"/sightings", name:"Sightings", component:"sightings"},
                {path:"/reportsighting", name:"Report", component:"sightingForm"}
            ]
        });   

    function AppComponent( userService) {
        
        this.userService = userService;
    }
    
    AppComponent.$inject = ['userService']
    
    
    
    
})();