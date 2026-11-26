CREATE TYPE "public"."input_type" AS ENUM('text');--> statement-breakpoint
CREATE TABLE "challenges" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "challenges_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"isDecreasing" boolean DEFAULT false NOT NULL,
	"solveHistory" text[] DEFAULT '{}'::text[] NOT NULL,
	"inputType" "input_type" DEFAULT 'text' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "permissions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "permissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"ionID" text NOT NULL,
	"canManageOthers" boolean DEFAULT false NOT NULL,
	"canAddChallenges" boolean DEFAULT false NOT NULL,
	"canRemoveChallenges" boolean DEFAULT false NOT NULL,
	"canSolveChallenges" boolean DEFAULT true NOT NULL
);
