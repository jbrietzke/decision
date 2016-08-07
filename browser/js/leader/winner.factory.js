app.factory('WinnerFactory', function($http){
  var factory = {};
  function getData(res){
    return res.data;
  }
  factory.findWinner = function(obj){
    return $http.get('api/user/' + obj)
    .then(getData)
  }

  return factory;
})

