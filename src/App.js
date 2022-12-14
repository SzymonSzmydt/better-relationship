import './App.css';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ProtectedRoute } from './context/ProtectedRoute';
import { Search } from './components/Search';
import { Ankiet } from './components/Ankiet';
import { Progress } from './components/Progress';

function App() {
  
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={ <Login/> }/>
          <Route path="/home" element={ 
            <ProtectedRoute>
              <Main/>
            </ProtectedRoute>
          }/>
          <Route path="/search" element={ 
            <ProtectedRoute>
              <Search/>
            </ProtectedRoute>
          }/>
          <Route path="/ankiet" element={ 
            <ProtectedRoute>
              <Ankiet/>
            </ProtectedRoute> 
          }/>
          <Route path="/progress" element={ 
            <ProtectedRoute>
              <Progress/>
            </ProtectedRoute> 
          }/>
          <Route path="*" element={ <Login/> }/>
        </Routes>
      </UserAuthContextProvider>      
    </div>
  );
}

export default App;
