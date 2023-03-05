import './App.css';
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';

function App() {
  return (
    <div style={{margin:"20px 100px"}} >
      <AddTask/>
      <ListTask/>
      
    </div>
  );
}

export default App;
