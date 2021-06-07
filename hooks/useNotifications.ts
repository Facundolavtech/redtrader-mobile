import { useEffect, useState } from "react";
import deviceStorage from "../services/deviceStorage";
import { RegisterTokenService } from "../services/Notifications";
import { registerForPushNotificationsAsync } from "../utils/notifications/registerToken";

const useNotifications = () => {
  const [tokenState, setTokenState] = useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      if (token) {
        setTokenState(token);
      }
    });
  }, []);

  useEffect(() => {
    if (tokenState) {
      registerToken();
    }
  }, [tokenState]);

  const registerToken = async () => {
    const authToken: any = await deviceStorage.getItem("authToken");

    await RegisterTokenService(tokenState, authToken);
  };
};

export default useNotifications;
