import useAuth from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isAdmin = [], isLoading } = useQuery({
    queryKey: ["admin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin/verify");
      return res.data;
    },
  });
  return { isAdmin, isLoading };
};
