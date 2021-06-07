import axiosClient from "../../config/axios";

export async function RegisterTokenService(token: any, authToken: string) {
  try {
    const response = await axiosClient
      .post(
        "/users/notifications/token/save",
        {
          token,
        },
        { headers: { Authorization: authToken } }
      )
      .then((res) => {
        return { status: res.status, msg: res.data };
      })
      .catch((err) => {
        return { status: err.response.status, msg: err.response.data };
      });

    return response;
  } catch (error) {
    return;
  }
}

export async function SendToAllService(token: string, market: string) {
  try {
    await axiosClient.post(
      "/users/notifications/sendtoall",
      { market },
      { headers: { Authorization: token } }
    );

    return;
  } catch (error) {
    return;
  }
}
