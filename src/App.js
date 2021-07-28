
import './App.css';
import Category from './components/category/Category';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
       <Topbar/>

       <Category/>
       
    </div>
  );
}

export default App;
