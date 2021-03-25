
var demoSimpleController = angular.module('SimpleController',[]);

demoSimpleController.controller('SimpleController',SimpleController);

demoSimpleController.factory('SimpleFactory',SimpleFactory);
function SimpleFactory(){
var factory = {};
var customers=[
{name:'John Wick',age:'40',city:'New York'},
{name:'John Doe',age:'30',city:'Hong Kong'},
{name:'Jo Biden',age:'20',city:'Sanfranscisco'},
{name:'Walsh',age:'33',city:'Miami Beach'},
{name:'Warne',age:'15',city:'Sydney'},
{name:'Maya',age:'50',city:'Kochi'},
{name:'caty',age:'22',city:'Porto'}
];
factory.getCustomers = function(){
 return customers;
}
return factory;
}

function SimpleController($scope,SimpleFactory){
$scope.customers = SimpleFactory.getCustomers();
$scope.addCustomer =function(){
$scope.customers.push({name:$scope.newCustomer.name,age:$scope.newCustomer.age,city:$scope.newCustomer.city});
}
}