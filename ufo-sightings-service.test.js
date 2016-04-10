describe("the ufo sightings service", function(){
    //some test data
    var someSightings = [{"id":126139,"description":"Giant mass of clustered lights miles long moving through sky\n\nMy brother and I live in a gated community in Indio. Our mailbox center is at the entrance of the community and we decided to ride our bikes to get the mail around 19:00. We are both about 30 years old, very interested in other forms of life and UFO activity, although never seeing anything ourselves or looking for it. As we're riding, my brother stops me and tells me to look at the weird stars above. It was a line of stars about the length of 4 big dippers long, clustered close together. We both quickly realized that this was not a star formation and became overcome by the size. They soon started expanding and contracting to one another, not dramatically or quickly, but subtly. There were at least 70 lights above, each dimming and brightening. If they were more spread out, the average person would assume they were stars. \n\nWe then watched this massive unity of lights move across the sky from the west. We could see a tip that was the front of what looked like t! he biggest object. To be clear, we couldn't see any object, but because lights were around it's perimeter, we could make out the shape of the front which was pointed. The best way to describe how it moved is almost like a caterpillar, certain parts moving away and toward each other (expanding and contracting) while the thing as a whole moved forward at the same speed. I was in complete awe. \n\nWe watched a few planes come into view which moved much faster and were much closer than this thing, which was so far away, it had to be in space. All the lights slowly dimmed except three at the tail of the mass, which formed a perfect triangle. I was instantly frustrated because what I saw couldn't be explained but I was grateful my brother at least saw it, too. \n\nThe duration here was approximately 8 minutes and the size was miles long. It's unimaginable and looked like it was a detached piece of the night sky with controlled hinges that moved. \n\nNot sure if we were viewing one giant obje! ct or multiple small objects linked together somehow.","occurred":"2016-03-01 19:00","reported":"2016-03-01 19:54","posted":"2016-03-04","shape":"Changing","duration":"8 minutes","city":"Indio","state":"CA"},{"id":126140,"description":"White lights in Fresno sky.\n\nI was looking south, and noticed what I thought was a bright star or planet in my peripheral vision above a large tree. Turning to look south-southwest, I noticed that the light was not one but two lights, and they were traveling parallel to the horizon, in an apparent western direction. The lights were bright white, similar in intensity to an aircraft landing light at a distance, but no sound was noted. I called to my wife, who was standing inside the house, and turned back just in time to see the lights blink out, one by one. \n\nMy wife did not see them.","occurred":"2016-03-01 16:34","reported":"2016-03-01 20:18","posted":"2016-03-04","shape":"Light","duration":"2 minutes","city":"Fresno","state":"CA"},{"id":126144,"description":"Triangular, wedge-shaped, UFO with green lights hovering at cloud level above the Ocala National Forest.\n\nI witnessed a triangular UFO above the Ocala National Forest at 10:30 PM on March 1, 2016. \n\nThere was a green light that went from the UFO to the ground, then it disappeared. It was far into the woods, but it appeared to be above the U.S. Navy Pinecastle bombing range that is in the Ocala National Forest. \n\nAfter the light beam disappeared, the whole thing vanished.","occurred":"2016-03-01 22:30","reported":"2016-03-02 08:23","posted":"2016-03-04","shape":"Triangle","duration":"5 minutes","city":"Ocala","state":"FL"}]
    
    beforeEach(module('ufo-sightings'));
    
    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        var $httpBackend = $injector.get('$httpBackend');
        
        //tell it how to respond
        $httpBackend.whenGET("http://localhost:3000/uforeports.sqlite/uforeports?$orderby=reported+desc&$skip=0&$top=10").respond(someSightings);        

        $httpBackend.whenRoute('GET', 'http://localhost:3000/uforeports.sqlite/uforeports/:id')
        .respond(function(method, url, data, headers, params) {
           
            return [200, someSightings.find(function(s){
                return s.id == params.id
            })]
        });
    }));

    it("can get the sightings", inject(function(ufoSightingsService, $httpBackend){
        
        
        //tell $httpBackend that I expect this URL to be called
        $httpBackend.expectGET("http://localhost:3000/uforeports.sqlite/uforeports?$orderby=reported+desc&$skip=0&$top=10");
        
        //call the service
        ufoSightingsService.getUfoSightings().then(function(sightings){
            
            //make sure that the thing the service gives us is what we expect
            expect(sightings).toEqual(someSightings)
        })
        
        //this lets $httpBackend know that I'm done with it and to assert the expectations
        $httpBackend.flush();
        
    }));
    
    
    
    it("can get a sighting", inject(function(ufoSightingsService, $httpBackend){
        
        $httpBackend.expectGET("http://localhost:3000/uforeports.sqlite/uforeports/"+someSightings[0].id);
        
        ufoSightingsService.getUfoSighting(someSightings[0].id).then(function(sighting){
            
            expect(sighting).toEqual(someSightings[0])
        })
        
        $httpBackend.flush();
        
    }));    
    
})