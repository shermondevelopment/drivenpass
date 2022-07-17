-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('credit', 'debit', 'both');

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "holder_name" TEXT NOT NULL,
    "secure_code" TEXT NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "is_virtual" BOOLEAN NOT NULL DEFAULT false,
    "type_card" "CardType" NOT NULL,
    "password" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
