app.factory('UserFactory', function($http){
  var factory = {};
  function getData(res){
    return res.data;
  }
  factory.getAllUsers = function(){
    return $http.get('/api')
    .then(getData);
  }

  factory.createNewUser = function(user){
    return $http.post('api/user', user)
    .then(getData);
  }

  return factory;
})
