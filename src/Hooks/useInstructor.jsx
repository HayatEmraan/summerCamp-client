import useAuth from "./useAuth";
import { useAxiosSecure } from "./useAxiosSecure";

export const useInstructor = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isInstructor = [], isLoading } = useQuery({
    queryKey: ["instructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/api/instructor/verify");
      return res.data;
    },
  });
  return { isInstructor, isLoading };
};
