import { config } from "dotenv";
config();

export const devConfig = {
    MONGO_URI: process.env.MONGO_URI,
    API_PORT: process.env.API_PORT,
};
