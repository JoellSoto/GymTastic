import './App.css';
import Login from './Components/Login'
import Home from './Components/PaginaInicial'
import 'bootstrap/dist/css/bootstrap.min.css';
import Planos from './Components/Pagamentos';
import Load from './Components/Loading'
import Pagamento from './Components/Escolha'
import Historico from './Components/Historico'
import {HashRouter as Router ,Route,Link,Routes} from 'react-router-dom'

export default function App() {
  return (
    

    <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/Pay' element={<Planos/>}/>
       <Route path='/Pagamento' element={<Pagamento/>}/>
       <Route path='/load' element={<Load/>}/>
       <Route path='/Historico' element={<Historico/>}/>
    </Routes>
  );
}

