CREATE TYPE "public"."delivery_status" AS ENUM('pending', 'cancelled', 'shipped', 'delivered');--> statement-breakpoint
CREATE TYPE "public"."payment_status" AS ENUM('pending', 'failed', 'success');--> statement-breakpoint
CREATE TYPE "public"."product_category" AS ENUM('Men', 'Women', 'Kids');--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"total_price" real NOT NULL,
	"delivery_status" "delivery_status" DEFAULT 'pending' NOT NULL,
	"payment_status" "payment_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"price" real NOT NULL,
	"category" "product_category" NOT NULL,
	"type" varchar(256) NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"discount" real,
	"sale_price" real,
	"on_sale" boolean DEFAULT false NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"is_new" boolean DEFAULT false NOT NULL,
	"is_featured" boolean DEFAULT false NOT NULL,
	"is_best_seller" boolean DEFAULT false NOT NULL,
	"is_trending" boolean DEFAULT false NOT NULL,
	"is_popular" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;