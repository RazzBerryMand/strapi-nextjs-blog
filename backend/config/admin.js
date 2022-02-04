module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a359cb45f3e796313af351c2fd7de214'),
  },
});
