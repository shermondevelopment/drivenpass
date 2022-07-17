-- CreateTable
CREATE TABLE "Wireless" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "wireless" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Wireless_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wireless" ADD CONSTRAINT "Wireless_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
