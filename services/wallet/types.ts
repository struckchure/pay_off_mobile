export interface WalletInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  accountNumber: string;
  accountReference: string;
  bankName: string;
  balance: string;
  isActive: boolean;
}

export interface FundWalletPayload {
  amount: number;
}

export interface FundWalletResponse {
  link: string;
}
