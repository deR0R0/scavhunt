ALTER TABLE "challenges" ALTER COLUMN "solveHistory" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "challenges" ALTER COLUMN "solveHistory" SET DATA TYPE jsonb USING '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "challenges" ALTER COLUMN "solveHistory" SET DEFAULT '[]'::jsonb;