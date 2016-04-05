(function(){
    
    angular.module('ufo-sightings')                    
    .component('sightingReport', {
        templateUrl:"sighting-report-component.html",
        controller:SightingReportController,
        bindings: {
            report:'<'
        }
        
    });   

    
    function SightingReportController(){
        
        this.report = null;
        
    }
})();