(function(){
    
    angular.module('ufo-sightings')                     
        .component('sightingDetails', {
            templateUrl:"sighting-details-component.html",
            controller:SightingDetailsComponent
        });    
    
    function SightingDetailsComponent(ufoSightingsService){
        this.ufoSightingsService = ufoSightingsService;
        this.sighting = null;
        
        var that = this;
        
        //todo: need to get the sighting id to pass to getUfoSighting()
        this.ufoSightingsService.getUfoSighting().then(function(data){
            that.sighting = data;
            
            
        });

    }
    
    
    SightingDetailsComponent.$inject = ["ufoSightingsService"]

})();