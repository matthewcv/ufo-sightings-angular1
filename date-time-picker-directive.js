(function(){
    var ddo = {
        require:'ngModel',
        restrict:'A',
        link:function(scope, elem, attrs, controller){
            elem.datetimepicker({
                timeFormat: 'hh:mm tt'
            })
            elem.on('change', function(){
                var date = elem.datetimepicker("getDate");
                scope.$apply(function(){
                    controller.$setViewValue(date)
                })
            })
        }
    }
    
    
    angular.module("myWidgets",[])
    .directive("dateTimePicker", function(){return ddo})
    
})();