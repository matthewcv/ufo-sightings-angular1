describe("the states value", function(){
    
    beforeEach(module('ufo-sightings'));
    
    it("should have 59 items", inject(function(states){
        
        expect(states.length).toEqual(59);
        
    }));
    
    it("should have Kansas", inject(function(states){
        
        expect(states).toContain({"abbreviation":"KS","name":"Kansas"});
        
    }))     
    
})