import axios from "axios";

const API_URL = "http://localhost:8000";


const login = (username, password) => {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    return axios
        .post(API_URL + "/api/v1/login/access-token",params)
        .then((response) => {
            if (response.data.full_name) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};
const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    register,
    logout,
    getCurrentUser,
}

export default AuthService;