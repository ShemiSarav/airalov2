import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  BASE_URL: process.env.BASE_URL || 'https://www.airalo.com', // fallback for UI
  API_BASE_URL: process.env.API_BASE_URL || 'https://sandbox-partners-api.airalo.com',
  CLIENT_ID: process.env.CLIENT_ID!,
  CLIENT_SECRET: process.env.CLIENT_SECRET!,
  TOKEN: process.env.TOKEN, // optional, we will generate it dynamically
};

export default env;
