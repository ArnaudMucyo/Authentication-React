import './App.css';
import Login from "./components/login/login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./components/Registration/registration";
import Welcome from "./components/Welcome/welcome";
import NotFound from "./components/Not Found/notFound";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
