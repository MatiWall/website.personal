import BasePage from './components/base.js';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <BasePage/>
    </Router>
    </div>
  );
}

export default App;
