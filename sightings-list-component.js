(function(){
    angular.module('ufo-sightings')                     
        .component('sightingsList', {
            templateUrl:"sightings-list-component.html",
            controller:SightingsListComponent,

        });    
    
    function SightingsListComponent(ufoSightingsService){
        this.ufoSightingsService = ufoSightingsService;
        this.ufoReports = null;
        this.page = 0;
        this.getSightings();

    }
    
    SightingsListComponent.$inject = ["ufoSightingsService"]
    
    SightingsListComponent.prototype.getSightings = function(){
        var that = this;
        this.ufoSightingsService.getUfoSightings(this.page).then(function(data){
            that.ufoReports = data;
        });
    }
    SightingsListComponent.prototype.older = function(){
        this.page++;
        this.getSightings();        
    }
    SightingsListComponent.prototype.newer = function(){
        if(this.page > 0){
            this.page--;
        }
        
        this.getSightings();        
    }

})();