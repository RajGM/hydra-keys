-- CreateTable
CREATE TABLE "Wallet" (
    "pubkey" TEXT NOT NULL PRIMARY KEY,
    "authority" TEXT NOT NULL,
    "acceptSPL" BOOLEAN NOT NULL,
    "totalShares" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Membership" (
    "memberPubkey" TEXT NOT NULL,
    "memberShipType" TEXT NOT NULL,
    "shareCount" INTEGER NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletPubkey" TEXT NOT NULL,
    CONSTRAINT "Membership_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
