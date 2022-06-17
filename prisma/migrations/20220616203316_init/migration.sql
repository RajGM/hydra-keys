-- CreateTable
CREATE TABLE "Wallet" (
    "pubkey" TEXT NOT NULL PRIMARY KEY,
    "authority" TEXT NOT NULL,
    "memberShipType" TEXT NOT NULL,
    "acceptSPL" BOOLEAN NOT NULL,
    "totalShares" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "memberPubkey" TEXT NOT NULL,
    "shareCount" INTEGER NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletPubkey" TEXT NOT NULL,
    CONSTRAINT "Users_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
