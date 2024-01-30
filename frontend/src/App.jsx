import { useState } from 'react'
import { FirstComponent } from './components/FirstComponent'
import { SecondComponent } from "./components/SecondComponent";

function App() {
  const [todos, setTodos] = useState([]);

    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json =await res.json();
      setTodos(json.todos);
    })
  return (
    <div>
      <FirstComponent/>
      <SecondComponent todos={todos}></SecondComponent>
    </div>
      
      
  )
}

export default App
