import React,{useState} from "react";
// import FirstPage from '../src/components/FirstPage'
import RoutesFile from "./components/RoutesFile";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  return (
    <div>
     <RoutesFile isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default App;
