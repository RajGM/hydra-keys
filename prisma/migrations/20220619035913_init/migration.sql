/*
  Warnings:

  - Added the required column `name` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallet" (
    "name" TEXT NOT NULL,
    "pubkey" TEXT NOT NULL PRIMARY KEY,
    "authority" TEXT NOT NULL,
    "memberShipType" TEXT NOT NULL,
    "acceptSPL" BOOLEAN NOT NULL,
    "totalShares" INTEGER NOT NULL
);
INSERT INTO "new_Wallet" ("acceptSPL", "authority", "memberShipType", "pubkey", "totalShares") SELECT "acceptSPL", "authority", "memberShipType", "pubkey", "totalShares" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
