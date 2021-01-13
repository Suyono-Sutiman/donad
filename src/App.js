import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './component/hero';
import Variant from './component/variant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='App-main'>
        <div className='intro'>
            <h2 className='intro-text display-text-1' >Donad</h2>
        </div>
        <div className='main-content'>
        <Hero/>
        <Variant/>
        </div>
      </main>
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
