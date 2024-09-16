CREATE TABLE IF NOT EXISTS "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar,
	"title" text,
	"image" text,
	"date" text,
	"content" text,
	CONSTRAINT "news_slug_unique" UNIQUE("slug")
);
