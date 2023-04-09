import React, { useState } from "react";
import { fetchFCMToken, onMessageListener } from "./firebase";
import {Button, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notification</strong>
            <small>12 mins ago</small>
          </Toast.Header>
          <Toast.Body>There are some new updates that you might love!</Toast.Body>
        </Toast>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
    </div>
  );
}

export default App;
