
import './App.css';
import {Routes,Route}from"react-router-dom";
import {Home} from "./components/Home/Home"
import {Formone} from "./components/Forms/Form_one"
import {Formtwo} from "./components/Forms/Form_two"
import {User} from "./components/Users/User"
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/registration/one" element={<Formone/>}/>
       <Route path="/registration/two" element={<Formtwo/>}/>
       <Route path="/users" element={<User/>}/>
     </Routes>
    </div>
  );
}

export default App;
