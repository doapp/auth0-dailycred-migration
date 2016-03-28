/**
 * This script to authenticate the user will execute each time a user that is not found in Auth0 database attempts to log in
 *
 * @see https://auth0.com/docs/connections/database/migrating and https://auth0.com/blog/2016/02/16/migrating-your-parse-users-to-auth0/
 *
 * @param email
 * @param password
 * @param callback
 */
function login(email, password, callback) {
    request.post({
        url: 'https://www.dailycred.com/user/api/signin.json',
        qs:  {
            client_id: configuration.clientId,
            login:     email,
            pass:      password
        }
    }, function(err, response, body) {
        if (err) {
            return callback(err);
        } else {
            if (200 !== response.statusCode) {
                return callback();
            }
            var user = JSON.parse(body);

            if (!user.worked) {
                return callback(new Error('Invalid username or password'));
            }

            callback(null, {
                user_id:        user.user.id.toString(),
                nickname:       email,
                email:          email,
                email_verified: true
                //Return any other attrs you like here
            });
        }
    });
}
