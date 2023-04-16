import { useQuery } from "@tanstack/react-query";

import PaymentService from ".";

const paymentService = new PaymentService();

export default function useWallet() {
  const { data } = useQuery({
    queryKey: ["getWallet"],
    queryFn: () => paymentService.getWallet(),
  });

  return { wallet: data?.data };
}
