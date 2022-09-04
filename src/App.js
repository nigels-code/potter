import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "The Chatty Potter";
  });
  return (
    <div className="container">
      <h1 className="center">The Chatty Potter</h1>
      <h2 className="center italic">Coming soon...</h2>
    </div>
  );
}

export default App;
