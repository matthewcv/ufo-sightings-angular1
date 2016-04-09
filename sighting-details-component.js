(function(){
    
    angular.module('ufo-sightings')                     
        .component('sightingDetails', {
            templateUrl:"sighting-details-component.html",
            controller:SightingDetailsComponent
        });    
    
    function SightingDetailsComponent(ufoSightingsService){
        this.ufoSightingsService = ufoSightingsService;
        this.sighting = null;
        

    }
    
       
    SightingDetailsComponent.$inject = ["ufoSightingsService"]
    
    SightingDetailsComponent.prototype.$routerOnActivate = function(next,previous){
        var that = this;
        
        this.ufoSightingsService.getUfoSighting(next.params.id).then(function(data){
            that.sighting = data;
            
            
        });
        
    }

})();