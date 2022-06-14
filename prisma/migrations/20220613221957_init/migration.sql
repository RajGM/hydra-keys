-- CreateTable
CREATE TABLE "Wallet" (
    "pubkey" BLOB NOT NULL PRIMARY KEY,
    "authority" BLOB NOT NULL
);

-- CreateTable
CREATE TABLE "Membership" (
    "memberPubkey" BLOB NOT NULL,
    "walletPubkey" BLOB NOT NULL,

    PRIMARY KEY ("memberPubkey", "walletPubkey"),
    CONSTRAINT "Membership_walletPubkey_fkey" FOREIGN KEY ("walletPubkey") REFERENCES "Wallet" ("pubkey") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_pubkey_key" ON "Wallet"("pubkey");
