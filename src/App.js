import Main from "./Pages/Main Page/Main";
import Registration from "./Pages/RegistrationPage/Registration"
import Cake from "./Pages/CakePage/Cake";
import Coffee from "./Pages/CoffeePage/Coffee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Client from "./Pages/ClientPage/Client";



function App() {
  
  return (
    <div className="App">
    <Main />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/cakes" element={<Cake />} />
          <Route exact path="/coffee" element={<Coffee />} />
          <Route exact path="/client" element={<Client />} />
          
        </Routes>
      </Router>
        
     
    </div>
  );
}

export default App;
