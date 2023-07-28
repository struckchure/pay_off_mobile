import axios from "@src/shared/axios";

import { TransactionFilterParams, TransactionInterface } from "./interface";

export default class TransactionService {
  async listTransactions(params: Partial<TransactionFilterParams>): Promise<{
    data: TransactionInterface[];
    status: number;
  }> {
    const { data, status } = await axios({
      method: "GET",
      url: "/transaction/",
      params,
    });

    return { data, status };
  }
}
