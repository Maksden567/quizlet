            
import MainPage from './Pages/MainPage/MainPage'
import ModulePage from './Pages/ModulePage/ModulePage'
import GamePage from './Pages/GamePage/GamePage'
import CardBlockPage from './Pages/CardBlockPage/CardBlockPage'
import WordPage from './Pages/WordPage/Module'
import MemorizationPage from './Pages/MemorizationPage/MemorizationPage'
import LoginPage from './Pages/LOginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import CreateModule from './Pages/CreateModule/CreateModule'
import TestPage from './Pages/TestPage/TestPage'
import ResultTestPage from './Pages/ResultTestPage/ResultTestPage'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route element={<MainPage/>}  path='/' />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/modules" element={<ModulePage />} />  
        <Route path="/games" element={<GamePage />} />  
      </Routes>
    </Router>
    
    </>
  )
}

export default App
