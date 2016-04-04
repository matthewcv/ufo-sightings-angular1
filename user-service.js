(function(){

    angular.module("ufo-sightings") 
        .service("userService", userServiceFactory)  
        
    var _log;    
    function userServiceFactory(log){
        _log = log;
        _log.info('user service factory')
        
        return new UserService();
    }
    
    userServiceFactory.$inject = ["$log"]

    function UserService(){
        this.isLoggedIn = false;
        this.userName = null;
    }
    
    
    UserService.prototype.logIn = function(name){
        this.isLoggedIn = true;
        this.userName = name;
        _log.info(this.userName, "is logged in")
    }        
    
    UserService.prototype.logOut = function(){
        this.isLoggedIn = false;
        this.userName = null;
    }        
    
})();