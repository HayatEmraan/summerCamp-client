import axios from "axios";
import { toast } from "react-hot-toast";

export const useGoogle = (email, name, date, role, photo) => {
  axios
    .post("https://summer-camp-sv.vercel.app/users/data", {
      email,
      name,
      date,
      role,
      photo,
    })
    .then((res) => {})
    .catch((err) => toast.error("Something went wrong. Please try again!"));
};
