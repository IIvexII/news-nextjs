import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "index",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
