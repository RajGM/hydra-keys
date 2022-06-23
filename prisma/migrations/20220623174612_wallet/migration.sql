/*
  Warnings:

  - Added the required column `bumpSeed` to the `Wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastSnapshotAmount` to the `Wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalInflow` to the `Wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMembers` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallet" (
    "name" TEXT NOT NULL,
    "pubkey" TEXT NOT NULL PRIMARY KEY,
    "authority" TEXT NOT NULL,
    "memberShipType" TEXT NOT NULL,
    "totalMembers" INTEGER NOT NULL,
    "totalInflow" INTEGER NOT NULL,
    "bumpSeed" INTEGER NOT NULL,
    "acceptSPL" BOOLEAN NOT NULL,
    "totalShares" INTEGER NOT NULL
);
INSERT INTO "new_Wallet" ("acceptSPL", "authority", "memberShipType", "name", "pubkey", "totalShares") SELECT "acceptSPL", "authority", "memberShipType", "name", "pubkey", "totalShares" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
