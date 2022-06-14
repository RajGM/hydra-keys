/*
  Warnings:

  - The primary key for the `Membership` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Membership" (
    "memberPubkey" TEXT NOT NULL PRIMARY KEY,
    "memberShipType" TEXT NOT NULL,
    "shareCount" INTEGER NOT NULL,
    "walletPubkey" TEXT NOT NULL,
    CONSTRAINT "Membership_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Membership" ("memberPubkey", "memberShipType", "shareCount", "walletPubkey") SELECT "memberPubkey", "memberShipType", "shareCount", "walletPubkey" FROM "Membership";
DROP TABLE "Membership";
ALTER TABLE "new_Membership" RENAME TO "Membership";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
