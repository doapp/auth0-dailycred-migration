/**
 * This is called when:
 * - A user attempts to sign-up (or is created via API or Auth0 web UI)
 * - A user clicks on a valid password change confirmation link.
 * - An API call is made to update a user's email or username.
 * 
 * If a user does not exist, callback() with no params should be called (don't throw error)
 **/
 
 function getByEmail (email, callback) {
  request.post({
    url:  'https://www.dailycred.com/admin/api/user.json',
    qs: {
      client_id: configuration.clientId,
      client_secret: configuration.secret,
      email: email
    }
    //for more options check:
    //https://github.com/mikeal/request#requestoptions-callback
  }, function (err, response, body) {
  
    if (err) return callback(err);
    if (response.statusCode === 401) return callback();
    var user = JSON.parse(body);

    if(!user.email){
      return callback();
    }
    
    callback(null,   {
      user_id:     user.id.toString(),
      nickname:    user.display,
      email:       user.email,
      name:        user.email,
      given_name:  user.email,
      family_name: user.email,
    });
  });
}
