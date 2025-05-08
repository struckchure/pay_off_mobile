import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Linking } from "react-native";

import WalletService from "@/services/wallet";
import { FundWalletPayload } from "@/services/wallet/types";

const walletService = new WalletService();

export default function useWallet() {
  const { data } = useQuery({
    queryKey: ["getWallet"],
    queryFn: () => walletService.getWallet(),
  });

  const { mutate: fundWallet } = useMutation({
    mutationFn: (payload: FundWalletPayload) =>
      walletService.fundWallet(payload),
    async onSuccess(data) {
      if (data?.data) {
        Linking.openURL(data.data.link);
      }
    },
    onError: (error: AxiosError<any>) => {
      console.log(error.response?.data);
    },
  });

  return { wallet: data?.data, fundWallet };
}
