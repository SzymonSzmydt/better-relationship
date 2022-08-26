import './App.css';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ProtectedRoute } from './context/ProtectedRoute';

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
        </Routes>
      </UserAuthContextProvider>      
    </div>
  );
}

export default App;
