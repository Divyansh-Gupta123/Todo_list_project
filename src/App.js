
import './App.css';
import DisplayAll from './DisplayAll';
import TododList from './TodoList';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route element={<TododList/>} path='/todolist' />
      <Route element={<DisplayAll/>} path='/displayall' />
    </Routes>
   </Router>
      
    </div>
  );
}

export default App;
