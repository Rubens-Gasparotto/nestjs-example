import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  debug: process.env.APP_DEBUG || false,
  production: process.env.APP_PROD || false,
}));