import { useQuery } from "@tanstack/react-query";

import TransactionService from "@src/services/transaction";
import { TransactionFilterParams } from "./interface";
import { removeNullOrEmptyValues } from "@src/shared/utils";

const tranasactionService = new TransactionService();

export default function useTransaction(
  props?: Partial<TransactionFilterParams>,
) {
  const { data: transactions, isLoading: isTransactionsLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () =>
      tranasactionService.listTransactions(
        props ? removeNullOrEmptyValues(props) : {},
      ),
  });

  return {
    transactions: transactions?.data || [],
    isTransactionsLoading,
  };
}
