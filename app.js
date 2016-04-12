(function(){
    angular.module("ufo-sightings", ["ngComponentRouter","myWidgets"])  
    .config(["$locationProvider",function(locationProvider){
        //use html 5 mode so our urls are nicer
        locationProvider.html5Mode(true);
    }])
    //need to tell the router what the root component is so it has a place to start
    .value('$routerRootComponent', 'appRoot')    
})();