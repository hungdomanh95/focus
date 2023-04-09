import React, { useState } from "react";
import PushNotification from "./components/PushNotification";
import TodoList from "./components/TodoList";
function App() {

  return (
    <div className="App">
      {/* <PushNotification/> */}
      <TodoList/>
    </div>
  );
}

export default App;
