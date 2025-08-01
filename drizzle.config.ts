
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config(); 

export default {
  schema: "./src/db/schema.ts", 
  out: "./src/db/migrations", // The folder we just deleted
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Check this variable!
  },
} satisfies Config;