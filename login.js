function login (email, password, callback) {
  
  request.post({
    url:  'https://www.dailycred.com/user/api/signin.json',
    qs: {
      client_id: configuration.clientId,
      login: email,
      pass: password
    }
    //for more options check:
    //https://github.com/mikeal/request#requestoptions-callback
  }, function (err, response, body) {
  
    if (err) return callback(err);
    if (response.statusCode === 401) return callback();
    var user = JSON.parse(body);

    if(!user.worked){
      return callback(new Error('Invalid username or password'));
    }
    
    callback(null,   {
      user_id:     user.user.id.toString(),
      nickname:    user.display,
      email:       user.email
    });

  });

}
