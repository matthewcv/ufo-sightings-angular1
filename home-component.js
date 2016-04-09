(function(){
    angular.module('ufo-sightings')                     
        .component('home', {
            templateUrl:"home-component.html",
            controller:HomeComponent
        });    
    
    function HomeComponent(ufoSightingsService){
        
        this.ufoSightingsService = ufoSightingsService;
        this.ufoReports = null;
        
        var that = this;
        this.ufoSightingsService.getUfoSightings().then(function(data){
            that.ufoReports = data.slice(0,5);
            
            
        });

    }
    
    HomeComponent.$inject = ["ufoSightingsService"]
})();