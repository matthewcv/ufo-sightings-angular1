(function(){
    angular.module('ufo-sightings')                     
        .component('sightings', {
            template:"<ng-outlet></ng-outlet>",
            controller:SightingsComponent,

        });    
    
    function SightingsComponent(){

    }
    

})();