export interface TransactionInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  amount: string;
  transactionType: string;
  transactionStatus: string;
  reference: string;
  description: string;
  meta?: Record<string, any>;
}

export interface TransactionFilterParams {
  transactionStatus: "SUCCESSFUL" | "PENDING" | "FAILED";
  transactionType: "DEBIT" | "CREDIT";
}
