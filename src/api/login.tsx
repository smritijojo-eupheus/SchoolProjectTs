
import axios from "axios";

export const login = async () => {
  const res = await axios
    .post(
      `https://stageapi.eupheusapp.com/api/auth/signin`
    )
    .catch((err) => console.log(err));
};
