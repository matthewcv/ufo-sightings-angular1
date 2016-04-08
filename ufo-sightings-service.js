(function(){
    
    angular.module("ufo-sightings") 
        .service("ufoSightingsService", UfoSightingsService)  

    
    
    function UfoSightingsService(http){
        this.http = http
        
    }
    
    UfoSightingsService.$inject = ['$http'];
    
    UfoSightingsService.prototype.getUfoSightings = function(page){
        return this.http.get("http://localhost:3000/uforeports.sqlite/uforeports?$top=10")
            .then(function(response){
                console.dir(response);
            },function(error){
                
            })
    }
    
    UfoSightingsService.prototype.saveUfoSightingReport = function(sighting){
        
    }
    
    UfoSightingsService.prototype.getUfoSighting = function (id) {
        
    }
    
})();