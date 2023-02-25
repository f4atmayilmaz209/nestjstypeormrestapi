-- CreateTable
CREATE TABLE "kampanya" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "kampanya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "siparis" (
    "id" SERIAL NOT NULL,
    "siparis_title" TEXT NOT NULL,
    "siparistoplamfiyat" DOUBLE PRECISION NOT NULL,
    "urun_id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "siparis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
