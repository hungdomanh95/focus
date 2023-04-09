import React, { useState } from "react";
import { fetchFCMToken, onMessageListener } from "./firebase";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);

  fetchFCMToken(setTokenFound);

  onMessageListener()
    .then((payload: any) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      {isTokenFound && "Notification permission enabled 👍🏻 "}
      {!isTokenFound && "Need notification permission ❗️ "}
    </div>
  );
}

export default App;
