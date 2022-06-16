/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Membership" (
    "memberPubkey" TEXT NOT NULL,
    "shareCount" INTEGER NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletPubkey" TEXT NOT NULL,
    CONSTRAINT "Membership_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);
