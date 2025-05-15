import { useEffect } from "react";
import { socket } from "../socket";

const ConnectionManager = ({ isConnected }: { isConnected: boolean }) => {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <>
      {isConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </>
  );
};

export default ConnectionManager;
