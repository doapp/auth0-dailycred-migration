/**
 * The Get User script will execute when any of the following actions are performed:
 * - A user attempts to sign-up.
 * - A user clicks on a valid password change confirmation link.
 * - An API call is made to update a user's email or username.
 * 
 * If a user does not exist, callback() with no params should be called (don't throw error)
 *
 * @see https://auth0.com/docs/connections/database/migrating and https://auth0.com/blog/2016/02/16/migrating-your-parse-users-to-auth0/
 *
 * @param email
 * @param callback
 */
function getByEmail(email, callback) {
    request.post({
        url: 'https://www.dailycred.com/admin/api/user.json',
        qs:  {
            client_id:     configuration.clientId,
            client_secret: configuration.secret,
            email:         email
        }
        //for more options check:
        //https://github.com/mikeal/request#requestoptions-callback
    }, function(err, response, body) {
        if (err) {
            return callback(err);
        } else {
            if (200 !== response.statusCode !== 401) {
                return callback();
            }
            var user = JSON.parse(body);

            if (!user.email) {
                return callback();
            }

            callback(null, {
                user_id:     user.id.toString(),
                nickname:    user.display,
                email:       user.email,
                name:        user.email,
                given_name:  user.email,
                family_name: user.email
            });
        }
    });
}
