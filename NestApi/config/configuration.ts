export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 9000,
  mongodb_port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
});