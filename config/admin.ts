export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someRandomSecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
