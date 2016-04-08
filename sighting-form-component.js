(function(){
    
    angular.module('ufo-sightings')                    
    .component('sightingForm', {
        templateUrl:"sighting-form-component.html",
        controller:SightingFormController,
        bindings: {
            onSightingReported:'&'
        }
    });   


    function SightingFormController(userService, states,ufoSightingsService){
        
        this.ufoSightingsService = ufoSightingsService;
        this.userService = userService;
        this.states = states;
        this.newUfoSighting = {};
        this.ufoShapes = UFO_SHAPES;
        this.receivedReport = null;
    }
    
    SightingFormController.$inject = ['userService', 'states', 'ufoSightingsService']
    
    SightingFormController.prototype.reportUfoSighting = function(form){
        if(form.$valid){
            var that = this;
            this.ufoSightingsService.saveUfoSightingReport(angular.copy(this.newUfoSighting))
                .then(function(savedReport){
                    that.receivedReport = savedReport;
                    var arg = {sighting:savedReport};
                    that.onSightingReported(arg);
                    that.newUfoSighting = {};
                    form.$setPristine();
                    form.$setUntouched();
                });
            
        }
    }
    
var UFO_SHAPES=[    
"Changing",
"Chevron",
"Cigar",
"Circle",
"Cylinder",
"Egg",
"Fireball",
"Flash",
"Formation",
"Light",
"Other",
"Oval",
"Sphere",
"Triangle",
"Unknown",
"Diamond",
"Disk",
"Rectangle",
"Teardrop"]
    
        
})();