(function(){
    
    angular.module("ufo-sightings") 
        .service("ufoSightingsService", UfoSightingsService)  

    
    
    function UfoSightingsService(http){
        this.http = http
        
    }
    
    UfoSightingsService.$inject = ['$http'];
    
    UfoSightingsService.prototype.getUfoSightings = function(page){
        
        var options = { 
            params : {
                $top : 10,
                $skip : (page || 0) * 10,
                $orderby: "reported desc"
            }
        }
        return this.http.get("http://localhost:3000/uforeports.sqlite/uforeports", options)
            .then(function(response){
                return response.data
            },function(error){
                
            })
    }
    
    UfoSightingsService.prototype.saveUfoSightingReport = function(sighting){
        
        sighting.reported = new Date();
        sighting.occurred = dateFormat(sighting.occurred);
        sighting.reported = dateFormat(sighting.reported);
        
        return this.http.post("http://localhost:3000/uforeports.sqlite/uforeports", sighting)
            .then(function(response){
                return response.data
                
            }, function(error){
                
                
            })
        
    }
    
    UfoSightingsService.prototype.getUfoSighting = function (id) {
        return this.http.get("http://localhost:3000/uforeports.sqlite/uforeports/" + id)
            .then(function(response){
                return response.data
            },function(error){
                
            })    
    }
    
    
    
    function pad(num){
        if(num < 10){
            return "0" + num;
        }
        return num;
    }

    function dateFormat(date){
        if(isNaN( date.getDate())) {
            return null;
        }
        return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes())
    }

})();