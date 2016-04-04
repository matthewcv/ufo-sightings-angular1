(function(){


    function UserService(){
        this.isLoggedIn = false;
        this.userName = null;
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