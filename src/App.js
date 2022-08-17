import './App.css';
import { Header } from './components/header/Header';
import { Top } from './components/top/Top';
import { Bottom } from './components/bottom/Bottom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <Bottom/>
    </div>
  );
}

export default App;
