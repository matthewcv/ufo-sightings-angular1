describe("the sighting details component", function(){
    
    var aSighting = {"id":126134,"description":"Flash of light across Sydney, Australia, sky.\n\nWhat i saw was a flash of light (looked to be triangular) move from East/South East to West/North West on a clear night no clouds at all. The object moved from as far as I could physically see in about 1 second, then lifted outwards into the atmosphere. \n\nThe light was very bright but at the same time hazy like what you would see with lightning flashes through storm clouds. The object was extremely large. If i had to put into perspective, if you look at the Southern Cross from earth.. we have the 2 pointers.. this object was as wide as the gap between the 2 pointers so it was HUGE. \n\nIt seemed to me that this was very high in the night sky so I can only imagine how big it was but as I mentioned this was on a clear night and I heard no sounds, although it looked to move faster than the speed of light.","occurred":"2016-03-01 23:30","reported":"2016-03-01 16:48","posted":"2016-03-04","shape":"Unknown","duration":"2 seconds","city":"Sydney (Australia)","state":null}
    
    beforeEach(module('ufo-sightings'));
    
            

    it("should get a ufo sighting when activate by the router", function(){

                    
        //we know that the sighting details component wants to use the sightings service but that's tested somewhere else
        //we'll create a mock of it here so that we can control what it does.  
        
        //a spy is a thing that jasmine gives us so that we can watch what happens to a function.
        var getUfoSightingSpy = jasmine.createSpy('getUfoSighting')
         
        function mockSightingService($q) {
            
            //here i'm telling the spy what to return when it gets called.
            getUfoSightingSpy.and.returnValue($q.when(aSighting));
            
            this.getUfoSighting = getUfoSightingSpy;
        };

        module(function($provide){
            //this tells the injector to use our mock service instead of the real one
            $provide.service("ufoSightingsService", mockSightingService)
        });
        
        
        inject(function($componentController, $rootScope) {
                //component controllers need a scope object. Even though we don't use scope, 
                //angular still does so we need to set that up here
                //$rootScope is the service that angular uses to make scopes so we'll do the same thing.
                var ctrl = $componentController("sightingDetails", {$scope:$rootScope.$new()});
                
                //execute the function
                ctrl.$routerOnActivate({params:{id:500}});
                
                //$q won't invoke the then callback that our controller uses untill the next digest cycle. We can force one by calling $apply().
                $rootScope.$apply()

                //assert that it did what I expect
                expect(getUfoSightingSpy).toHaveBeenCalledWith(500)
                expect(ctrl.sighting).toEqual(aSighting)
            }
        )
        
    });
    
    
})