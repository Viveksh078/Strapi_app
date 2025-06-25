module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '24pAZ6QHA6AItGXbYr0NZQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
