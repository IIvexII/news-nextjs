import { pgTable, uuid, text, varchar } from "drizzle-orm/pg-core";

export const news = pgTable("news", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").unique(),
  title: text("title"),
  image: text("image"),
  date: text("date"),
  content: text("content"),
});
