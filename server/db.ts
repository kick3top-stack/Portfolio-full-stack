// Minimal DB setup since we are avoiding a real DB for this static site request
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// We export a dummy pool/db if env var is missing to prevent crash, 
// as this is a static site request.
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://dummy:dummy@localhost:5432/dummy" 
});
export const db = drizzle(pool, { schema });
