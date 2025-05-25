import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log("You are now connected to the network.");
      setOnlineStatus(true);
    };

    const handleOffline = () => {
      console.log("You are not connected to the network.");
      setOnlineStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
