/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet {
    owner: string;
    walletId: string;
    private balance: number;

    constructor(owner: string, walletId: string, balance: number) {
        this.owner = owner;
        this.walletId = walletId;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit berhasil: Rp${amount}`);
        } else {
            console.log("Jumlah deposit harus lebih dari 0.");
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Jumlah penarikan harus lebih dari 0.");
        } else if (amount > this.balance) {
            console.log("Saldo tidak mencukupi.");
        } else {
            this.balance -= amount;
            console.log(`Withdraw berhasil: Rp${amount}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

    showWalletInfo(): void {
        console.log("Wallet ID :", this.walletId);
        console.log("Owner     :", this.owner);
        console.log("Balance   : Rp" + this.balance);
    }
}

const wallet = new DigitalWallet(
    "Kalimandra",
    "WAL001",
    500000
);

wallet.showWalletInfo();

console.log("--------------------");
wallet.deposit(200000);
console.log("Current Balance : Rp" + wallet.getBalance());
console.log("--------------------");
wallet.withdraw(100000);
console.log("Current Balance : Rp" + wallet.getBalance());
console.log("--------------------");
wallet.showWalletInfo();