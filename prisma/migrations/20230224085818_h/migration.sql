-- AlterTable
CREATE SEQUENCE products_product_id_seq;
ALTER TABLE "products" ALTER COLUMN "product_id" SET DEFAULT nextval('products_product_id_seq');
ALTER SEQUENCE products_product_id_seq OWNED BY "products"."product_id";
