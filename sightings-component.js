(function(){
    angular.module('ufo-sightings')                     
        .component('sightings', {
            template:"<ng-outlet></ng-outlet>",
            controller:SightingsComponent,
            $routeConfig:[
                {path:"/", name:"List", component:"sightingsList", useAsDefault:true},
                {path:"/:id", name:"Details", component:"sightingDetails"}
            ]
        });    
    
    function SightingsComponent(){

    }
    

})();