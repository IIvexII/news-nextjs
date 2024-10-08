import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { news } from "./schema";

const connectionString = process.env.DATABASE_URL as string;

const client = postgres(connectionString);
export const db = drizzle(client, { schema: { news } });
