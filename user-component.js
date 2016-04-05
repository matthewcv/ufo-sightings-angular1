(function(){
    
    
    function UserController(userService){
        this.userService = userService;
        this.userName = null;
    }
    
    UserController.prototype.logIn = function(){
        if(this.userName){
            this.userService.logIn(this.userName)
        }
    }

    
    
})();