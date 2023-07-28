import { useMutation, useQuery } from "@tanstack/react-query";
import { Linking } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

import WalletService from "@src/services/wallet";
import { FundWalletPayload } from "@src/services/wallet/types";

const walletService = new WalletService();

export default function useWallet() {
  const { data } = useQuery({
    queryKey: ["getWallet"],
    queryFn: () => walletService.getWallet(),
  });

  const { mutate: fundWallet } = useMutation({
    mutationFn: (payload: FundWalletPayload) => {
      return walletService.fundWallet(payload);
    },
    async onSuccess(data) {
      if (data?.data) {
        if (await InAppBrowser.isAvailable()) {
          await InAppBrowser.open(data.data.link, {
            enableUrlBarHiding: true,
            enableDefaultShare: false,
          });
        } else {
          Linking.openURL(data.data.link);
        }
      }
    },
  });

  return { wallet: data?.data, fundWallet };
}
