import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import  "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
