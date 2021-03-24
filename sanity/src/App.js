import './App.css';
import Header from './components/Header';
import Routes from './routes/Routes';
import { GlobalStyles } from './styles/Global';

function App() {
  return (
<>
  <GlobalStyles/>
  <div className="App">
  <Header url={`https://aldianews.com/sites/default/files/articles/cuco2_0.jpg`} head={`(in)sanity`}/>
  <Routes/>
 
  </div>
</>
  );
}

export default App;