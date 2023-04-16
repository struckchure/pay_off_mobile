import axios from "../axios";
import { Storage } from "../../utils";
import { WalletInterface } from "./types";

const storage = new Storage();

export default class PaymentService {
  async getWallet(): Promise<{ data: WalletInterface; status: number }> {
    const { data, status } = await axios({
      url: "/payment/wallet/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${await storage.get("accessToken")}`,
      },
    });

    return { data, status };
  }
}
