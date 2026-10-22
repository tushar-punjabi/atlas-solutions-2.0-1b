import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
export const posts = pgTable('posts', {
 id: text('id').primaryKey(), userId: text('userId').notNull(), title: text('title').notNull(), slug: text('slug').notNull(), excerpt: text('excerpt').notNull(), content: text('content').notNull(), seoTitle: text('seoTitle').notNull().default(''), seoDescription: text('seoDescription').notNull().default(''), status: text('status').notNull().default('draft'), publishedAt: timestamp('publishedAt'), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
