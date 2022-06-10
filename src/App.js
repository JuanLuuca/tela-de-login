import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;