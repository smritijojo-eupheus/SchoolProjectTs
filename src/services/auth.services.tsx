import axios from "axios";


const API_URL = "https://stageapi.eupheusapp.com/api/auth/signin";

class AuthService {
  login(Email: string, Password: string) {
    return axios
      .post(API_URL + "signin", {
        Email,
        Password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
}

logout() {
  localStorage.removeItem("user");
}

register(Email: string, Password: string) {
  return axios.post(API_URL + "signup", {
    Email,
    Password
  });
}

getCurrentUser() {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
}
}

export default new AuthService();