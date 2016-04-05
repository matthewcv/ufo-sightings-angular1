(function(){

    angular.module("ufo-sightings") 
        .service("userService", UserService)  
        

    function UserService(){
        this.isLoggedIn = true;
        this.userName = 'Fox Mulder';
    }
    
    
    UserService.prototype.logIn = function(name){
        this.isLoggedIn = true;
        this.userName = name;
    }        
    
    UserService.prototype.logOut = function(){
        this.isLoggedIn = false;
        this.userName = null;
    }        
    
})();


