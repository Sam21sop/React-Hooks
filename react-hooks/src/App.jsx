import './App.css'
import UserForm from './Component/01_useState/userForm';
import Counter from './Component/02_Counter/counter';
import ChangeTitle from './Component/03_useEffect/useEffect';

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <UserForm/>
      <Counter/>
      <ChangeTitle/>
    </>
  )
}

export default App
