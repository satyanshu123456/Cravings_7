import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";

function App() 
  {
    return (
      <>
      <BrowserRouter>
      <Home/>
      <Login/>
      </BrowserRouter>
      </>
    )

  }
   

export default App;