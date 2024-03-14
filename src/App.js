import './App.css';
import coder from './coder.png';
import coderTest from './—Pngtree—office figures_319491.png';

function Header() {
  return (
    <header className="App-header">
      <h1>Header</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div >
        <img src={coderTest} alt="coderTest" style={{width:"400px"}} />
        <h1>Welcome to My React App </h1>
      </div>
    </div>
  );
}

export default App;