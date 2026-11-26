import { drizzle } from "drizzle-orm/node-postgres";

const url = process.env.DATABASE_URL

if (!url) {
    throw new Error("DATABASE_URL is not set in .env.local. Site will not function!")
}

export const db = drizzle(url)