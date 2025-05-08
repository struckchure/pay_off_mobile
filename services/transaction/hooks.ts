import { useQuery } from "@tanstack/react-query";

import TransactionService from "@/services/transaction";
import { removeNullOrEmptyValues } from "@/utils";
import { TransactionFilterParams } from "./interface";

const tranasactionService = new TransactionService();

export default function useTransaction(
  props?: Partial<TransactionFilterParams>
) {
  const { data: transactions, isLoading: isTransactionsLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () =>
      tranasactionService.listTransactions(
        props ? removeNullOrEmptyValues(props) : {}
      ),
  });

  return {
    transactions: transactions?.data || [],
    isTransactionsLoading,
  };
}
