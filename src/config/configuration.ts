export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  externalApi: {
    baseUrl: process.env.EXTERNAL_API_BASE_URL ?? 'https://api.example.com',
    timeout: parseInt(process.env.EXTERNAL_API_TIMEOUT ?? '5000', 10),
  },
  cors: {
    origin: process.env.CORS_ORIGIN ?? '*',
    methods: process.env.CORS_METHODS ?? 'GET,HEAD,PUT,PATCH,POST,DELETE',
  },
});
