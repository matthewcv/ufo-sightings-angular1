(function(){
    
    angular.module('ufo-sightings')                    
    .component('sightingForm', {
        templateUrl:"sighting-form-component.html",
        controller:SightingFormController,
        bindings: {
            onSightingReported:'&'
        }
    });   


    function SightingFormController(userService, states){
        
        
        this.userService = userService;
        this.states = states;
        this.newUfoSighting = {};
        this.ufoShapes = UFO_SHAPES
    }
    
    SightingFormController.$inject = ['userService', 'states']
    
    SightingFormController.prototype.reportUfoSighting = function(form){
        if(form.$valid){
            var arg = {sighting:this.newUfoSighting};
            this.onSightingReported(arg);
            this.newUfoSighting = {};
            form.$setPristine();
            form.$setUntouched();
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