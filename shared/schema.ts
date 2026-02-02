import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Defining types for static content to ensure type safety across the app
// Even though this is a static site without a DB, these types serve as our data model

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: text("tech_stack").array().notNull(),
  link: text("link").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'frontend', 'backend', 'tools'
  level: text("level").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertSkillSchema = createInsertSchema(skills);

export type Project = typeof projects.$inferSelect;
export type Skill = typeof skills.$inferSelect;
