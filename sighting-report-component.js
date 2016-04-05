(function(){
    
    angular.module('ufo-sightings')                    
    .component('sightingReport', {
        templateUrl:"sighting-report-component.html",
        controller:SightingReportController
        
    });   

    
    function SightingReportController(){
        
        this.report = null;
        
    }
})();