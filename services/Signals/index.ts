import axiosClient from "../../config/axios";

export async function GetSignalsService(token: string) {
  try {
    const response = await axiosClient
      .get("/signals", {
        headers: { Authorization: token },
      })
      .then((res) => {
        return { status: res.status, data: res.data };
      })
      .catch((err) => {
        return {
          status: err.response.status,
        };
      });

    return response;
  } catch (error) {
    return;
  }
}

export async function CreateSignalService(data: object, token: string) {
  try {
    const response = await axiosClient
      .post("/signals/create", data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        return { status: res.status, msg: res.data };
      })
      .catch((err) => {
        return {
          status: err.response.status,
          msg: err.response.msg,
        };
      });

    return response;
  } catch (error) {
    return;
  }
}
