import './App.css'
import UserForm from './Component/01_useState/userForm';
import Counter from './Component/02_Counter/counter';
import ChangeTitle from './Component/03_useEffect/00_useEffect';
import Timer from './Component/03_useEffect/01_SideEffect';


function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <UserForm/>
      <Counter/>
      <ChangeTitle/>
      <Timer/>
    </>
  )
}

export default App
