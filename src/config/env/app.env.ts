export const appConfig = () => ({
  app: {
    port: process.env.APP_PORT || 5000,
    prefix: process.env.APP_PREFIX || '',
  },
});
