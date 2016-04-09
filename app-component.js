(function() {


    angular.module('ufo-sightings')                     
        .component('appRoot', {
            templateUrl:"app-component.html",
            controller:AppComponent,
            $routeConfig:[
                {path:"/", name:"Home", component:"home"},
                {path:"/sightings/...", name:"Sightings", component:"sightings"},
                {path:"/reportsighting", name:"Report", component:"sightingForm"}
            ]
        });   

    function AppComponent( userService,rootRouter) {
        console.dir(rootRouter)
        this.rootRouter = rootRouter;
        this.userService = userService;
    }
    
    AppComponent.$inject = ['userService','$rootRouter']
    
    AppComponent.prototype.$onInit = function(next,prev){
        console.log(next,prev)
    }
    
    
})();