import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/homePage";
import Loginpage from "./Components/loginpage";
import SignUpPage from "./Components/signUpPage";
import Quiz from "./Components/quiz";
import InstructionPage from "./Components/instructionPage";
import Welcomepage from "./Components/welcomePage";

function App() {
  return (
    <div className="App">
      {/* <Quiz/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/welcome" element={<Welcomepage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
