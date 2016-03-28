# auth0-dailycred-migration

[User migration / import](https://auth0.com/docs/connections/database/migrating) from DailyCred to Auth0.  For a more complete documentation than the offical see [migrating yoru parse users](https://auth0.com/blog/2016/02/16/migrating-your-parse-users-to-auth0/)

# Usage

Follow the directions in the user migration page above to setup custom database in Auth0.  

*  [login.js](./login.js) and [getUser.js](./getUser.js) are in this repo.  
*  Make sure to setup configuration settings in the "Database action scripts" section of the Auth0 UI for `configuration.clientId` and `configuration.secret`.  The values for these you can get from your DailyCred dashboard.
