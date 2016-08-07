app.factory('MoreDetailsFactory', function($http){
  var factory = {};

  factory.getUserInfo = function(userId){
    return $http.get('/api/user/' + userId)
    .then(function(user){
      return user.data;
    })
  }

  factory.updateUserInfo = function(info, id){
    return $http.put("/api/user/" + id, info)
    .then(function(res){
      return res.data;
    })
  }
  return factory;
})
