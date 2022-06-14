/*
  Warnings:

  - The primary key for the `Membership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Wallet` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Membership" (
    "memberPubkey" TEXT NOT NULL,
    "walletPubkey" TEXT NOT NULL,

    PRIMARY KEY ("memberPubkey", "walletPubkey"),
    CONSTRAINT "Membership_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Membership" ("memberPubkey", "walletPubkey") SELECT "memberPubkey", "walletPubkey" FROM "Membership";
DROP TABLE "Membership";
ALTER TABLE "new_Membership" RENAME TO "Membership";
CREATE TABLE "new_Wallet" (
    "pubkey" TEXT NOT NULL PRIMARY KEY,
    "authority" TEXT NOT NULL
);
INSERT INTO "new_Wallet" ("authority", "pubkey") SELECT "authority", "pubkey" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
