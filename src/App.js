import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Inventory } from './components/Inventory';
import { InventoryReport } from './components/InventoryReport';
import { SurveyRoutes } from './components/SurveyRoutes';
function App() {
  return (
    <div className="App">
      <h1>a/A forms</h1>
      <SurveyRoutes />
    </div>
  );
}

export default App;
