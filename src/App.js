import BasePage from './components/base.js';
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from './components/themes/themeContext.js';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <BasePage />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
