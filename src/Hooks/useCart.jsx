import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";

export const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user?.email}`);
      return res.data;
    },
  });
  return { cart, refetch };
};
