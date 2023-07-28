import axios from "@src/shared/axios";
import {
  FundWalletPayload,
  FundWalletResponse,
  WalletInterface,
} from "@src/services/wallet/types";

export default class WalletService {
  async getWallet(): Promise<{ data: WalletInterface; status: number }> {
    const { data, status } = await axios({
      url: "/wallet/",
      method: "GET",
    });

    return { data, status };
  }

  async fundWallet(
    fundWalletPayload: FundWalletPayload,
  ): Promise<{ data: FundWalletResponse; status: number }> {
    const { data, status } = await axios({
      url: "/wallet/fund/",
      method: "POST",
      data: { ...fundWalletPayload, redirectUrl: "http://localhost:9000" },
    });

    return { data, status };
  }
}
