angular.module('DemoAngular.view2')
.directive('firstDirective',function(){
    return{
        restrict:'EA',
        scope:{
          titlePage:'='
        },
        template:'<span>{{titlePage}}</span>'

    }
});
