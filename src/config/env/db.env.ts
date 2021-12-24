export const dbConfig = () => ({
  database: {
    port: process.env.DB_PORT || '3306',
    host: process.env.DB_HOST || '127.0.0.1',
    name: process.env.DB_NAME || 'test',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123456',
  },
});
