import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './component/contact';
import Head from './component/header';
import Hero from './component/hero';
import Variant from './component/variant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
      </header>
      <main className='App-main'>
        <div className='intro'>
            <h2 className='intro-text display-text-1' >Donad</h2>
        </div>
        <div className='main-content'>
        <Hero/>
        <Variant/>
        <Contact/>
        </div>
      </main>
      <footer className='App-footer'>
        Copyright|2021|DonaD
      </footer>
    </div>
  );
}

export default App;
