import axiosClient from "../../config/axios";

export async function LoginService(email: string, password: string) {
  try {
    const response = await axiosClient
      .post("/users/auth/login", { email, password })
      .then((res) => {
        return { status: res.status, token: res.data.token };
      })
      .catch((err) => {
        return { status: err.response.status, msg: err.response.data };
      });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function AuthService(token: string) {
  try {
    const response = await axiosClient
      .get("/users/auth", { headers: { Authorization: token } })
      .then((res) => {
        return { status: res.status, user: res.data };
      })
      .catch((err) => {
        return { status: err.response.status, msg: err.response.data };
      });

    return response;
  } catch (error) {
    console.log(error);
  }
}
