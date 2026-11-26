import { sql } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";

export const inputTypeEnum = pgEnum("input_type", ["text"]) // more to come later :)

export const challenges = pgTable("challenges", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    description: text().notNull(),
    isDecreasing: boolean().notNull().default(false),
    solveHistory: text().array().notNull().default(sql`'{}'::text[]`), // text array of stuf.. so like ["2028", "2027", "2026"] etc.
    inputType: inputTypeEnum().notNull().default("text")
})

export const permissions = pgTable("permissions", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    ionID: text().notNull(), // no, this should not be a primary key.
    canManageOthers: boolean().notNull().default(false),
    canAddChallenges: boolean().notNull().default(false),
    canRemoveChallenges: boolean().notNull().default(false),
    canSolveChallenges: boolean().notNull().default(true),
})