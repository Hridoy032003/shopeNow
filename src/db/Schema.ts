import {
  pgTable,
  serial,
  varchar,
  real,
  boolean,
  integer,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// =================================================================
// ENUMS
// =================================================================
// These helpers create custom ENUM types in your PostgreSQL database.

export const productCategoryEnum = pgEnum("product_category", [
  "Men",
  "Women",
  "Kids",
]);




export const products = pgTable("products", {
  // Core Fields
  id: serial("id").primaryKey(), // @id @default(autoincrement())
  name: varchar("name", { length: 256 }).notNull(),
  price: real("price").notNull(),
  category: productCategoryEnum("category").notNull(),
  type: varchar("type", { length: 256 }).notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),

  // Optional (Nullable) Fields
  discount: real("discount"), // Float?
  salePrice: real("sale_price"), // Float?

  // Boolean flags with defaults
  onSale: boolean("on_sale").default(false).notNull(),
  stock: integer("stock").default(0).notNull(),
  isNew: boolean("is_new").default(false).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  isBestSeller: boolean("is_best_seller").default(false).notNull(),
  isTrending: boolean("is_trending").default(false).notNull(),
  isPopular: boolean("is_popular").default(false).notNull(),

  // Timestamps
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(), // @default(now())
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date()), // @updatedAt
});

// =================================================================
// ORDERS TABLE
// =================================================================




// =================================================================
// RELATIONS
// =================================================================
// This section tells Drizzle how to join tables for your queries.



