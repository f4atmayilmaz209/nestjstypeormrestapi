-- AlterTable
ALTER TABLE "kampanya" ADD COLUMN     "siparisId" INTEGER;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "siparisId" INTEGER;

-- AlterTable
ALTER TABLE "siparis" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_siparisId_fkey" FOREIGN KEY ("siparisId") REFERENCES "siparis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kampanya" ADD CONSTRAINT "kampanya_siparisId_fkey" FOREIGN KEY ("siparisId") REFERENCES "siparis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "siparis" ADD CONSTRAINT "siparis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
