import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";

export const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order");
      return res.data;
    },
  });
  return { cart, refetch };
};
