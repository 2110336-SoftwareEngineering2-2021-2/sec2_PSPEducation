import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
