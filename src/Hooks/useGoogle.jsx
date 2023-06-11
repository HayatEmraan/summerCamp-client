import axios from "axios";

export const useGoogle = (email, name, date, role, photo) => {
  axios
    .post("http://localhost:3000/users/data", {
      email,
      name,
      date,
      role,
      photo,
    })
    .then((res) => {})
    .catch((err) => console.log(err));
};
