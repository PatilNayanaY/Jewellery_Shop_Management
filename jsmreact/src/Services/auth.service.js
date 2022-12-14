import axios from "axios";
const API_URL = "http://localhost:9090/login";
const register = (username,email,password) =>{
    return axios.post(API_URL + "sighnup", {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  export default {
    register,
    login,
    logout,
  };
