(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('AppController', AppController);    //register the controller with the module.

    //define the controller. 
    function AppController() {
        this.ufoReports = UFO_REPORTS;
        this.states = STATES;
        this.isLoggedIn = false;
        this.newUfoReport = {};
        
        this.userName;
    }
    
    AppController.prototype.logIn = function(){
        if(this.userName){
            this.isLoggedIn = true;
        }
    }
    
    AppController.prototype.addUfoReport = function(){
        UFO_REPORTS.push(this.newUfoReport);
        this.newUfoReport = {};
    }
    
    var STATES = [{"abbreviation":"AL","name":"Alabama"},{"abbreviation":"AK","name":"Alaska"},{"abbreviation":"AS","name":"American Samoa"},{"abbreviation":"AZ","name":"Arizona"},{"abbreviation":"AR","name":"Arkansas"},{"abbreviation":"CA","name":"California"},{"abbreviation":"CO","name":"Colorado"},{"abbreviation":"CT","name":"Connecticut"},{"abbreviation":"DE","name":"Delaware"},{"abbreviation":"DC","name":"District Of Columbia"},{"abbreviation":"FM","name":"Federated States Of Micronesia"},{"abbreviation":"FL","name":"Florida"},{"abbreviation":"GA","name":"Georgia"},{"abbreviation":"GU","name":"Guam"},{"abbreviation":"HI","name":"Hawaii"},{"abbreviation":"ID","name":"Idaho"},{"abbreviation":"IL","name":"Illinois"},{"abbreviation":"IN","name":"Indiana"},{"abbreviation":"IA","name":"Iowa"},{"abbreviation":"KS","name":"Kansas"},{"abbreviation":"KY","name":"Kentucky"},{"abbreviation":"LA","name":"Louisiana"},{"abbreviation":"ME","name":"Maine"},{"abbreviation":"MH","name":"Marshall Islands"},{"abbreviation":"MD","name":"Maryland"},{"abbreviation":"MA","name":"Massachusetts"},{"abbreviation":"MI","name":"Michigan"},{"abbreviation":"MN","name":"Minnesota"},{"abbreviation":"MS","name":"Mississippi"},{"abbreviation":"MO","name":"Missouri"},{"abbreviation":"MT","name":"Montana"},{"abbreviation":"NE","name":"Nebraska"},{"abbreviation":"NV","name":"Nevada"},{"abbreviation":"NH","name":"New Hampshire"},{"abbreviation":"NJ","name":"New Jersey"},{"abbreviation":"NM","name":"New Mexico"},{"abbreviation":"NY","name":"New York"},{"abbreviation":"NC","name":"North Carolina"},{"abbreviation":"ND","name":"North Dakota"},{"abbreviation":"MP","name":"Northern Mariana Islands"},{"abbreviation":"OH","name":"Ohio"},{"abbreviation":"OK","name":"Oklahoma"},{"abbreviation":"OR","name":"Oregon"},{"abbreviation":"PW","name":"Palau"},{"abbreviation":"PA","name":"Pennsylvania"},{"abbreviation":"PR","name":"Puerto Rico"},{"abbreviation":"RI","name":"Rhode Island"},{"abbreviation":"SC","name":"South Carolina"},{"abbreviation":"SD","name":"South Dakota"},{"abbreviation":"TN","name":"Tennessee"},{"abbreviation":"TX","name":"Texas"},{"abbreviation":"UT","name":"Utah"},{"abbreviation":"VT","name":"Vermont"},{"abbreviation":"VI","name":"Virgin Islands"},{"abbreviation":"VA","name":"Virginia"},{"abbreviation":"WA","name":"Washington"},{"abbreviation":"WV","name":"West Virginia"},{"abbreviation":"WI","name":"Wisconsin"},{"abbreviation":"WY","name":"Wyoming"}];
    
    var UFO_REPORTS = [{"id":126139,"description":"Giant mass of clustered lights miles long moving through sky\n\nMy brother and I live in a gated community in Indio. Our mailbox center is at the entrance of the community and we decided to ride our bikes to get the mail around 19:00. We are both about 30 years old, very interested in other forms of life and UFO activity, although never seeing anything ourselves or looking for it. As we're riding, my brother stops me and tells me to look at the weird stars above. It was a line of stars about the length of 4 big dippers long, clustered close together. We both quickly realized that this was not a star formation and became overcome by the size. They soon started expanding and contracting to one another, not dramatically or quickly, but subtly. There were at least 70 lights above, each dimming and brightening. If they were more spread out, the average person would assume they were stars. \n\nWe then watched this massive unity of lights move across the sky from the west. We could see a tip that was the front of what looked like t! he biggest object. To be clear, we couldn't see any object, but because lights were around it's perimeter, we could make out the shape of the front which was pointed. The best way to describe how it moved is almost like a caterpillar, certain parts moving away and toward each other (expanding and contracting) while the thing as a whole moved forward at the same speed. I was in complete awe. \n\nWe watched a few planes come into view which moved much faster and were much closer than this thing, which was so far away, it had to be in space. All the lights slowly dimmed except three at the tail of the mass, which formed a perfect triangle. I was instantly frustrated because what I saw couldn't be explained but I was grateful my brother at least saw it, too. \n\nThe duration here was approximately 8 minutes and the size was miles long. It's unimaginable and looked like it was a detached piece of the night sky with controlled hinges that moved. \n\nNot sure if we were viewing one giant obje! ct or multiple small objects linked together somehow.","occurred":"2016-03-01 19:00","reported":"2016-03-01 19:54","posted":"2016-03-04","shape":"Changing","duration":"8 minutes","city":"Indio","state":"CA"},{"id":126140,"description":"White lights in Fresno sky.\n\nI was looking south, and noticed what I thought was a bright star or planet in my peripheral vision above a large tree. Turning to look south-southwest, I noticed that the light was not one but two lights, and they were traveling parallel to the horizon, in an apparent western direction. The lights were bright white, similar in intensity to an aircraft landing light at a distance, but no sound was noted. I called to my wife, who was standing inside the house, and turned back just in time to see the lights blink out, one by one. \n\nMy wife did not see them.","occurred":"2016-03-01 16:34","reported":"2016-03-01 20:18","posted":"2016-03-04","shape":"Light","duration":"2 minutes","city":"Fresno","state":"CA"},{"id":126144,"description":"Triangular, wedge-shaped, UFO with green lights hovering at cloud level above the Ocala National Forest.\n\nI witnessed a triangular UFO above the Ocala National Forest at 10:30 PM on March 1, 2016. \n\nThere was a green light that went from the UFO to the ground, then it disappeared. It was far into the woods, but it appeared to be above the U.S. Navy Pinecastle bombing range that is in the Ocala National Forest. \n\nAfter the light beam disappeared, the whole thing vanished.","occurred":"2016-03-01 22:30","reported":"2016-03-02 08:23","posted":"2016-03-04","shape":"Triangle","duration":"5 minutes","city":"Ocala","state":"FL"},{"id":126145,"description":"3 White lights over Glendale, Arizona.\n\nA large object with a flashing light in middle with 2 lights on the sides. Flying lower to the ground than a typical aircraft or helicopter. The distance between the lights would indicate a large size craft. We listened for engine noise and heard none. It appeared and moved in a fast side to side motion, and turned. It then disappeared, but there were no clouds or buildings.","occurred":"2016-03-01 22:00","reported":"2016-03-02 07:22","posted":"2016-03-04","shape":"Triangle","duration":"1 minutes","city":"Glendale","state":"AZ"},{"id":126154,"description":"Object looked like a shooting star, however, came low to tree line and lifted as if it \"swooped\" and then flash disappeared.\n\nObject looked like a shooting star, however, came low to tree line and lifted as if it \"swooped\" and then flash disappeared entirely. \n\nWas unlike anything I've witnessed before.","occurred":"2016-03-02 20:02","reported":"2016-03-02 17:12","posted":"2016-03-04","shape":"Fireball","duration":"2 seconds","city":"Farmingville","state":"NY"}];
   
   /**
    * this is what a ufo report object looks like 
 {
    "id": number;
    "description": string;
    "occurred": string;
    "reported": string;
    "posted": string;
    "shape": string;
    "duration": string;
    "city": string;
    "state": string;
} */ 
   
})();