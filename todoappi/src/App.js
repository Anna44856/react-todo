import './App.css';
import TodoLista from './TodoLista';

function App() {
  const data = [
    {"otsikko": "Ykkonen"},
    {"otsikko": "Kakkonen"},
    {"otsikko": "Kolmonen"},
  ];
  return (
    <div className="App">
      <TodoLista iteemit ={data}/>
    </div>
  );
}

export default App;