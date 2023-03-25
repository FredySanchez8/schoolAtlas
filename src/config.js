import { config } from "dotenv";

config();

export const MONGODB_SB = process.env.MONGODB_SB || "mongodb://127.0.0.1/escuelaweb-mongo"

export const PORT = process.env.PORT || 5000;