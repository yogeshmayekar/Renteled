import dotenv from 'dotenv';
dotenv.config();

export const {
    DB_URL,
    PORT,
    JWT_SECRET,
    DEBUG_MODE,
    NODE_ENV
} = process.env;
