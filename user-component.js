(function(){
    
    angular.module('ufo-sightings')                    
        .component('user', {
            templateUrl:"user-component.html",
            controller:UserController
        });   

    function UserController(userService){
        this.userService = userService;
        this.userName = null;
    }
    UserController.$inject = ['userService']

    UserController.prototype.logIn = function(){
        if(this.userName){
            this.userService.logIn(this.userName)
        }
    }
    

    
    
})();